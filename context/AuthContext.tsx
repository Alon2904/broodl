'use client';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Define the shape of the context's value
interface AuthContextType {
    currentUser: any; // current authenticated user
    signup: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    userDataObject: any; // data object from Firestore
    setUserDataObject: (data: any) => void; // function to update userDataObject
    loading: boolean; // a boolean indicating whether data is being loaded
}

const defaultAuthContextValue: AuthContextType = {
    currentUser: null,
    signup: async () => {
        throw new Error("signup function not implemented");
    },
    login: async () => {
        throw new Error("login function not implemented");
    },
    logout: async () => {
        throw new Error("logout function not implemented");
    },
    userDataObject: null,
    setUserDataObject: () => {}, // default implementation
    loading: false,
};

// Create the AuthContext with an initial value of null
const AuthContext = React.createContext<AuthContextType>(defaultAuthContextValue);

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [userDataObject, setUserDataObject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // AUTH HANDLERS
    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setUserDataObject({});
        setCurrentUser(null);
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => { // Listen for auth state changes
            try {
                setLoading(true);
                setCurrentUser(user);
                if (!user) {
                    console.log("no user found");
                    return;
                }

                // If user exists, fetch data from Firestore
                console.log("fetching user data");
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("found user data", docSnap.data());
                    setUserDataObject(docSnap.data());
                } else {
                    console.log('No such document');
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

    const value: AuthContextType = {
        currentUser,
        signup,
        login,
        logout,
        userDataObject,
        setUserDataObject, // <-- Make sure to include this function in the context value
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
