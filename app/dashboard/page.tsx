import React from 'react';
import type { Metadata } from "next";
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Hero from '@/components/Hero';


export const metadata: Metadata = {
    title: "Broodl - Dashboard",
    description: "Track your mood, every day." 
};

const isAuthenticated: boolean = true;

const DashboardPage: React.FC = () => {
    return (
        <Main>
            {isAuthenticated ? <Dashboard /> : <>
                
                <Login />
            </>}
        </Main>
    );
};

export default DashboardPage;
