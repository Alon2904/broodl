'use client'
import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const CallToAction: React.FC = () => {
    const { currentUser } = useAuth();

    return (
        <div className='flex justify-center w-full'>
            <div className={`flex ${currentUser ? 'justify-center' : 'justify-between'} w-full max-w-[300px]`}>
                {currentUser ? (
                    <Link href={'/dashboard'}>
                        <Button dark label='Go To Dashboard' onClick={() => { console.log('Go to Dashboard clicked') }} />
                    </Link>
                ) : (
                    <>
                        <Link href={'/signup'}>
                            <Button label='Sign Up' onClick={() => console.log('Sign Up clicked')} />
                        </Link>
                        <Link href={'/login'}>
                            <Button label='Log In' onClick={() => console.log('Log In clicked')} dark />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default CallToAction;
