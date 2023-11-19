import { Bebas_Neue } from 'next/font/google';
import { Navbar } from '../Navbar/navbar';
import React from "react";
import Link from 'next/link';


const bebas = Bebas_Neue({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});
const hStyle = { color: '#5a7d91'} ;


export default function selectedpc()  {
    return(
        <>
            <div className = "h-screen bg-slate-100">
                <Navbar />
                <div className = "grid h-3/4 place-items-center bg-slate-100">
                    <div style = {hStyle}>
                        <h1 className={`${bebas.className} text-rec text-8xl flex justify-center mt-20`}> YOUR PC IS ____ </h1>
                        <h2 className={`${bebas.className} flex justify-center mt-20 text-4xl text-ucsd font-bold`}> You may now use it </h2>
                        <div className = "flex justify-center">
                            <button className={`${bebas.className} rounded-md border-inherit w-4/5 h-24 bg-white mt-40 text-4xl tracking-widest hover:bg-slate-300 `} > 
                                <Link href= "../login" > BACK </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}