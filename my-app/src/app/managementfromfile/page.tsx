import React, { useState } from 'react';
import { Navbar } from "../Navbar/navbar";
import { Bebas_Neue } from 'next/font/google';
const bebas = Bebas_Neue({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

export default function Home() {
    const [text, setText] = useState();

    const load = function () {
        fetch('./csvInPublicFolder.csv')
            .then(response => response.text())
            .then(responseText => {
                setText(responseText);
            })
    };

    const RenderSeats = () => {
        var data = $.csv.toObjects(csv):
            let test = []
        //let broken = [[2, 2], [3, 4], [0, 1]]
        //let taken = [[5, 3], [6, 7]]
        //let empty = [[1, 1]]
        for (let i = 0; i < 8; i++) {
            let cur = []
            for (let j = 1; j < 10; j++) {
                var curBroken = broken.some(elem => {
                    return JSON.stringify([i, j]) === JSON.stringify(elem);
                });
                var curTaken = taken.some(elem => {
                    return JSON.stringify([i, j]) === JSON.stringify(elem);
                });
                var curEmpty = empty.some(elem => {
                    return JSON.stringify([i, j]) === JSON.stringify(elem);
                });
                let curStyle = "h-10 w-20 rounded-md font-mono m-2"
                if (curEmpty) {
                    cur.push(<button className={`${curStyle}`} disabled>{"‎"}</button>)
                }
                else {
                    if (curBroken) {
                        cur.push(<button className={`${curStyle} bg-slate-500`} disabled>{i.toString() + j.toString()}</button>)
                    } else if (curTaken) {
                        cur.push(<button className={`${curStyle} bg-red-500`} disabled>{i.toString() + j.toString()}</button>)
                    } else {
                        cur.push(<button className={`${curStyle} bg-green-500 hover:bg-green-400 active:scale-90 transform transition-transform active:drop-shadow-md`}>{i.toString() + j.toString()}</button>)
                    }
                }

            }
            test.push(<div>{cur}</div>)
        }
        return (
            <div>{test}</div>
        )
    }

    return (
        <>
            <div className=""><Navbar /></div>
            <div className="h-screen bg-slate-100 p-10 place-items-center">
                <div className="flex justify-around">
                    <div className="grid grid-rows-3 w-60">
                        <div className="flex flex-row gap-3 place-items-center">
                            <div className="h-8 w-8 bg-green-500 rounded-md"></div>
                            <p>- Avaliable</p>
                        </div>
                        <div className="flex flex-row gap-3 place-items-center">
                            <div className="h-8 w-8 bg-red-500 rounded-md"></div>
                            <p>- Taken</p>
                        </div>
                        <div className="flex flex-row gap-3 place-items-center">
                            <div className="h-8 w-8 bg-slate-500 rounded-md"></div>
                            <p>- Unavaliable</p>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <h1 className={`${bebas.className} text-rec text-5xl`}>Successfully Checked In!</h1>
                        <h2 className={`${bebas.className} text-rec text-3xl p-5`}>Choose PC</h2>
                    </div>
                    <div className="w-60"></div>
                </div >
                <div className="grid place-items-center">
                    <RenderSeats />
                </div>
            </div >
        </>
    )
}