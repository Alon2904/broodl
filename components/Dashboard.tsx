'use client';

import React from 'react';
import { Fugaz_One } from "next/font/google";
import Calender from './Calender';

const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

interface DashboardProps {
    num_days: number;
    time_remaining: string;
    date: Date;
}

const moods: { [key in 'happy' | 'sad' | 'angry' | 'neutral' | 'excited']: string } = {
    sad: '😢',
    angry: '😡',
    neutral: '😐',
    happy: '😊',
    excited: '😁'
};

// Create dummy data for the dashboard
const dummyData: DashboardProps = {
    num_days: 3,
    time_remaining: '3 days',
    date: new Date()
};

const Dashboard: React.FC = () => {
    return (
        <div className='flex flex-col flex-1 gap-8 sm:gap-10 md:gap-16'>
            <div className='grid grid-cols-1 sm:grid-cols-3 rounded-lg bg-indigo-50 text-indigo-500'>
                {Object.keys(dummyData).map((key, index) => (
                    <div key={index} className='p-4 flex flex-col gap-1 sm:gap-2'>
                        <p className='font-medium uppercase text-sm'>{key.replace('_', ' ')}</p>
                        <p className={'text-base sm:text-lg ' + fugazOne.className}>
                            {key === 'date' ? dummyData[key as keyof DashboardProps].toLocaleDateString() : dummyData[key as keyof DashboardProps]}
                        </p>
                    </div>
                ))}
            </div>
            <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugazOne.className}>
                How do you <span className='textGradient'>feel</span> today?
            </h4>
            <div className='grid grid-cols-2 sm:grid-cols-5 gap-4'>
                {Object.keys(moods).map((key, index) => (
                    <button
                    key={index}
                    className={`p-4 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-200 ${
                        index === Object.keys(moods).length - 1 && Object.keys(moods).length % 2 !== 0
                            ? 'col-span-2 md:col-span-1 sm:col-span-1'
                            : ''
                    } `}
                >
                        <div className='text-4xl sm:text-5xl md:text-6xl'>{moods[key as keyof typeof moods]}</div>
                        <p className={'text-base sm:text-lg text-indigo-500 ' + fugazOne.className}>{key}</p>
                    </button>
                ))}
            </div>
            <Calender  demo={true}/>
        </div>
    );
};

export default Dashboard;
