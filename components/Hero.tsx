'use client';
import React from 'react';
import { Fugaz_One } from "next/font/google";
import Button from './Button';
import Calender from './Calender';
import Link from 'next/link';

const fugazOne = Fugaz_One({
    subsets: ["latin"],
    weight: "400",
  });

const Hero: React.FC = () => {
    return (
        <div className='py-4 md:py-10 flex flex-col gap-8 sm:gap-10'>
            <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugazOne.className}><span className='textGradient'>Broodl</span> helps you track your <span className='textGradient'>daily</span> mood!</h1>
            <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>Create your mood record and see how you feel on <span className='font-semibold'>every day of every year.</span></p>
            <div className='grid grid-cols-2 gap-4'>
                

                 <Link href={'/dashboard'}>
                    <Button label='Sign Up' onClick={() => console.log('Sign Up clicked')} />
                </Link>

                <Link href={'/dashboard'}>
                    <Button label='Log In' onClick={() => console.log('Log In clicked')} dark />
                </Link>
                
            </div>
            <Calender  demo={true}/>
        </div>

    );
};

export default Hero;