import React from 'react'
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const hStyle = { color: '#425B69'} ;


const Modal = ( {isVisible, onClose}) => {
    if (!isVisible) return null;
    return(
        <div style = {hStyle}
            className= { `${bebas.className} fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center text-4xl`}>
            <div className='w-[600px] h-[400px] bg-white rounded p-10'>
                <div className= 'flex justify-center items-center mb-10'> STAFF LOGIN </div>
                <div className= 'items-center mb-10'> USERNAME: 
                    <input className="float-right h-10 p-1 border border-zinc-300 rounded"></input>
                    </div>
                <div className= 'items-center mb-10'> PASSWORD: 
                    <input className="float-right h-10 p-1 border border-zinc-300 rounded"></input>
                    </div>
                <button 
                    className={`${bebas.className} float-right mt-5  font-bold hover:text-sky-600`} 
                    type = "button"
                    onClick = { () => onClose()}>
                    Close </button>
            </div>
        </div>
    )
}
export default Modal