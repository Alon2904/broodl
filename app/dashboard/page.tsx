import React from 'react';
import type { Metadata } from "next";
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';
import Hero from '@/components/Hero';
import { useAuth } from '@/context/AuthContext';
import Loading from '@/components/Loading';


export const metadata: Metadata = {
    title: "Broodl - Dashboard",
    description: "Track your mood, every day." 
};


const DashboardPage: React.FC = () => {

 

    return (
        <Main>
            <Dashboard /> 
        </Main>
    );
};

export default DashboardPage;
