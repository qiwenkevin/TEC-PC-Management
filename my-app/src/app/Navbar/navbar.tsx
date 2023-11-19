import Image from "next/image";
import { Bebas_Neue } from 'next/font/google';
import recLogo from "../../../public/rec-logo.jpg";
import React, {useState} from "react";
import Modal from './Modal';
const bebas = Bebas_Neue({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

export function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <>
            <div className="bg-white flex justify-between">
                <Image
                    src={recLogo}
                    height="100"
                    alt="UCSD rec logo"
                />
                <button className ={`${bebas.className} text-2xl text-slate-950 mr-10 font-bold hover:text-sky-600`}> STAFF LOGIN 
                </button>
                <Modal>
                    test
                </Modal>
            </div>
        </>
    );
}