'use client';
import { Fugaz_One } from "next/font/google";
import Button from "./Button";


const fugazOne = Fugaz_One({
    subsets: ["latin"],
    weight: "400",
  });


const Login: React.FC = () => {

    return (
        <div>
            <div className=" flex flex-col flex-1 justify-center items-center gap-4">
                <h3 className={' '+fugazOne.className}> Log in/ Register</h3>
                <p>Your&#39;re one step away!</p>
                <input className="w-full max-w-[400px] mx-auto px-3 focus:border-indigo-800 hover: indigo-800  py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
                placeholder="Email"/>
                <input className="w-full max-w-[400px] mx-auto px-3 focus:border-indigo-800  hover: indigo-800 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
                placeholder="Password" type="password"/>
                <div className={'max-w-[400px] w-full mx-auto '}>
                    <Button label='Submit' onClick={() => console.log('Log In clicked')} full />
                </div>
                <p className="text-center">Don&#39;t have an account? <span className="text-indigo-600">Sign Up</span></p>
            </div>
        </div>
    );
};

export default Login;