import React from 'react';
import type { Metadata } from "next";
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';



export const metadata: Metadata = {
    title: "Moodly - Dashboard",
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
