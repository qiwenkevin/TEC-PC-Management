//"use client";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { GET } from "../api/deskdata/route";
import Desk from "../models/desk";
import { NextResponse } from 'next/server';
import { Navbar2 } from "../Navbar/navbar";
import { AppProps } from 'next/app';
import connectMongoDB from '../libs/mongodb';
import { type } from "os";
import senddata from '../deskdatagetter/deskdatagetter';
import RenderSeats from '../renderseats/renderseats'
import RenderTable from '../renderseats/rendertable'
// import React, { useState } from "react";

// export async function getServerSideProps() {
//     const data = GET()

//     //const{title, pid, state, row, col} = await request.json();
//     //await Desk.create({ title, pid, state, row, col });

//     return { data }
// } 

// export async function getStaticProps() {
//     const data = await GET();
// }


// const [buttonColor, setButtonColor] = useState("bg-green-500")

const loadDataFromServer = async () => {
    const jres = await GET()
    // const jres = response.json();
    console.log(jres)
    return jres
}

export default async function Home() {
    //const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    //const file = await GET();
    //const data = JSON.parse(await file.json());
    //await file.json();
    //;(await data).json. 


    var seats = await loadDataFromServer() 
    console.log(seats)


    //var seatdata = await senddata();
    //const data = JSON.parse(seatdata.json());
    /* console.log(seatdata)
    const RenderSeats = () => {
        let test = []
        let broken = [[2, 2], [3, 4]]
        let taken = [[0, 1], [2, 3], [4, 6]]
        let empty = [[1, 1]] 
        for (let i = 0; i < 8; i++) {
            let cur = []
            for (let j = 0; j < 9; j++) {
                var curBroken = false
                var curTaken = false
                var curEmpty = false
                var curDeskIndex = 0
                for (let k = 0; k < Object.keys(seatdata.desks).length; k++){
                    curDeskIndex = 0
                    let temp = seatdata.desks[k]
                    if (temp.row == i && temp.col == j){
                        curDeskIndex = k
                        if (temp.state == 0){curEmpty = true}
                        else if (temp.state == 1){curBroken = true}
                        else if (temp.state == 2){curTaken = true}
                    } 
                }
                let curStyle = "p-3 h-10 w-20 m-1 rounded-md items-center font-mono"
                if (curEmpty) { 
                    cur.push(<button className={`${curStyle} ${buttonColor} hover:bg-green-400 active:scale-90 transform transition-transform active:drop-shadow-md`} >{(seatdata.desks[curDeskIndex].title)}</button>)

                }
                else {
                    if (curBroken) {
                        cur.push(<button className={`${curStyle} bg-slate-500`} disabled><span>{(seatdata.desks[curDeskIndex].title)}</span></button>)
                    } else if (curTaken) {
                        cur.push(<button className={`${curStyle} bg-red-500`} disabled>{(seatdata.desks[curDeskIndex].title)}</button>)
                    } else {
                        cur.push(<button className={`${curStyle}`} disabled>{"‎"}</button>)
                    }
                }
            }
            test.push(<div>{cur}</div>)
        }
        return (
            <div>{test}</div>
        ) */
    // }

    /*const RenderTable = () => {
        let currentDate = new Date()
        let curUsers = [
            [0, 1, "A123", currentDate.getHours() + ":" + currentDate.getMinutes(), "01"],
            [2, 3, "A234", currentDate.getHours() + ":" + currentDate.getMinutes(), "23"],
            [4, 6, "A456", currentDate.getHours() + ":" + currentDate.getMinutes(), "46"]
        ]
        let userTable = []
        for (let i = 0; i < Object.keys(seatdata.desks).length; i++) {
            if (seatdata.desks[i].state == 2){
                let cur = []
                cur.push(<td>{seatdata.desks[i].pid}</td>)
                let msec = currentDate.getTime() - seatdata.desks[i].createdAt.getTime()
                let hh = Math.floor(msec / 1000 / 60 / 60).toString()
                var mm = Math.floor(msec / 1000 / 60).toString()
                cur.push(<td>{hh+":"+mm}</td>)
                cur.push(<td>{seatdata.desks[i].title}</td>)
                userTable.push(<tr>{cur}</tr>)
            }
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
    } */

    return (
        <>
            <div><Navbar2 /></div>
            <div className=' place-items-center'>
                <div className='grid grid-cols-3 h-screen p-10 bg-slate-100 justify-around'>
                    <div className=''><RenderTable seatdata={seats} /></div>
                    <div className='col-span-2 place-content-center'>
                        <RenderSeats seatdata={(seats)} />
                        {/* <div className='grid grid-cols-2 p-10 place-items-center'>
                            <button className=' bg-slate-200 rounded-md w-40 h-16 hover:bg-slate-300 active:scale-90 transform transition-transform active:drop-shadow-md'>1</button>
                            <button className=' bg-slate-200 rounded-md w-40 h-16 hover:bg-slate-300 active:scale-90 transform transition-transform active:drop-shadow-md'>2</button>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}