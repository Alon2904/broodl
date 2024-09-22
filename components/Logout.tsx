// Logout.tsx
'use client';
import React from 'react';
import Button from './Button';
import { useAuth } from '@/context/AuthContext';  // Ensure this path is correct

const Logout: React.FC = () => {

    const { logout, currentUser } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }



    return (
        <div>
            {
                currentUser ? (
                    <Button label='Log Out' onClick={handleLogout} dark />
                ) : (
                    null
                )
            }

        </div>
    );
};

export default Logout;
