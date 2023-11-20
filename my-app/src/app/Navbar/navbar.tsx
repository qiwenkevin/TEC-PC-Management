"use client";

import Image from "next/image";
import { Bebas_Neue } from 'next/font/google';
import recLogo from "../../../public/rec-logo.jpg";
import React, {useState , Fragment} from "react";
import Modal from "./Modal";
import Link from 'next/link';

const bebas = Bebas_Neue({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

//for check in page and the page after checking int
export function Navbar() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Fragment>
            <div className="bg-white flex justify-between">
                <Link href={"/management"}>
                    <div>
                        <Image
                            src={recLogo}
                            height="100"
                            alt="UCSD rec logo"
                        />
                        
                    </div>
                </Link>
                <button 
                    className={`${bebas.className} text-2xl text-slate-950 mr-10 font-bold hover:text-sky-600`}
                    type="button"
                    onClick = {() => setShowModal(true)} > STAFF LOGIN
                </button>
            </div>
            <Modal isVisible = {showModal} onClose = { () => setShowModal(false)} />
            </Fragment>
        </>
    );
}
//for admin page if they want to log out
export function Navbar2() {

    return (
        <>
            <div className="bg-white flex justify-between">
                <Image
                    src={recLogo}
                    height="100"
                    alt="UCSD rec logo"
                />
                <button className={`${bebas.className} text-2xl text-slate-950 mr-10 font-bold hover:text-sky-600 `} > 
                    <Link href= "../login" > LOG OUT </Link>
                </button>
            </div>
            
        </>
    );
}