"use client";
import { Navbar } from "../Navbar/navbar";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import {GET} from "../api/deskdata/route";
import Desk from "../models/desk";
import { NextResponse } from 'next/server';
import { AppProps } from 'next/app';
import connectMongoDB from '../libs/mongodb';
import { type } from "os";

// export async function getServerSideProps() {
//     const data = GET()

//     //const{title, pid, state, row, col} = await request.json();
//     //await Desk.create({ title, pid, state, row, col });

//     return { data }
// } 


// const loadDataFromServer = async ()=> {
//     const response = await fetch("http://localhost:3000/api/deskdata")
//     return response.json()
// }

export default async function Home() {
    //const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const file = await GET();
    //const data = JSON.parse(await file.json());
    await file.json();
    //;(await data).json.
    // const seatdata = await loadDataFromServer()
    const RenderSeats = () => {
        let test = []
        let broken = [[2, 2], [3, 4]]
        let taken = [[0, 1], [2, 3], [4, 6]]
        let empty = [[1, 1]]
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
                let curStyle = "p-3 h-10 w-20 m-1 rounded-md items-center font-mono"
                if (curEmpty) {
                    cur.push(<button className={`${curStyle}`}>{"‎"}</button>)
                }
                else {
                    if (curBroken) {
                        cur.push(<button className={`${curStyle} bg-slate-500`} disabled><span>{i.toString() + j.toString()}</span></button>)
                    } else if (curTaken) {
                        cur.push(<button className={`${curStyle} bg-red-500`} disabled>{i.toString() + j.toString()}</button>)
                    } else {
                        //cur.push(<button className={`${curStyle} bg-green-500 hover:bg-green-400 active:scale-90 transform transition-transform active:drop-shadow-md`}>{i.toString() + j.toString()}</button>)
                        cur.push(<button className={`${curStyle} bg-green-500 hover:bg-green-400 active:scale-90 transform transition-transform active:drop-shadow-md`}>{3}</button>)
                    }
                }

            }
            test.push(<div>{cur}</div>)
        }
        return (
            <div>{test}</div>
        )
    }

    const RenderTable = () => {
        let currentDate = new Date()
        let curUsers = [
            [0, 1, "A123", currentDate.getHours() + ":" + currentDate.getMinutes(), "01"],
            [2, 3, "A234", currentDate.getHours() + ":" + currentDate.getMinutes(), "23"],
            [4, 6, "A456", currentDate.getHours() + ":" + currentDate.getMinutes(), "46"]
        ]
        let userTable = []
        for (let i = 0; i < curUsers.length; i++) {
            let cur = []
            for (let j = 2; j < curUsers[i].length; j++) {
                cur.push(<td>{curUsers[i][j]}</td>)
            }
            userTable.push(<tr>{cur}</tr>)
        }
        return (
            <>
                <div className='w-300'>
                    <table className="border-collapse">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Time Start</th>
                                <th>PC used</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userTable}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    return (
        <>
            <div><Navbar /></div>
            {/* <div>{seatdata}</div> */}
            <div className=' place-items-center'>
                <div className='grid grid-cols-3 h-screen p-10 bg-slate-100 justify-around'>
                    <div className=''><RenderTable /></div>
                    <div className='col-span-2 place-content-center'>
                        <RenderSeats />
                        <div className='grid grid-cols-2 p-10 place-items-center'>
                            <button className=' bg-slate-200 rounded-md w-40 h-16 hover:bg-slate-300 active:scale-90 transform transition-transform active:drop-shadow-md'>1</button>
                            <button className=' bg-slate-200 rounded-md w-40 h-16 hover:bg-slate-300 active:scale-90 transform transition-transform active:drop-shadow-md'>2</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}