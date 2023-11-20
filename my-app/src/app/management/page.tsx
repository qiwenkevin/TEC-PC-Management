import { Navbar } from "../Navbar/navbar";
import { Bebas_Neue } from 'next/font/google';
import {GET} from "../api/deskdata/route";
import RenderSeats from '../renderseats/renderseats'

const bebas = Bebas_Neue({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const loadDataFromServer = async ()=> {
    const jres = await GET()
    // const jres = response.json();
    console.log(jres)
    return jres
}

export default async function Home() {
    var seatdata = await loadDataFromServer()

    // const RenderSeats = () => {
    //     let test = []
    //     let broken = [[2, 2], [3, 4]]
    //     let taken = [[0, 1], [2, 3], [4, 6]]
    //     let empty = [[1, 1]] 
    //     for (let i = 0; i < 8; i++) {
    //         let cur = []
    //         for (let j = 0; j < 9; j++) {
    //             var curBroken = false
    //             var curTaken = false
    //             var curEmpty = false
    //             var curDeskIndex = 0
    //             for (let k = 0; k < Object.keys(seatdata.desks).length; k++){
    //                 curDeskIndex = 0
    //                 let temp = seatdata.desks[k]
    //                 if (temp.row == i && temp.col == j){
    //                     curDeskIndex = k
    //                     if (temp.state == 0){curEmpty = true}
    //                     else if (temp.state == 1){curBroken = true}
    //                     else if (temp.state == 2){curTaken = true}
    //                 } 
    //             }
    //             let curStyle = "p-3 h-10 w-20 m-1 rounded-md items-center font-mono"
    //             if (curEmpty) { 
    //                 cur.push(<button className={`${curStyle} bg-green-500 hover:bg-green-400 active:scale-90 transform transition-transform active:drop-shadow-md`}>{(seatdata.desks[curDeskIndex].title)}</button>)

    //             }
    //             else {
    //                 if (curBroken) {
    //                     cur.push(<button className={`${curStyle} bg-slate-500`} disabled><span>{(seatdata.desks[curDeskIndex].title)}</span></button>)
    //                 } else if (curTaken) {
    //                     cur.push(<button className={`${curStyle} bg-red-500`} disabled>{(seatdata.desks[curDeskIndex].title)}</button>)
    //                 } else {
    //                     cur.push(<button className={`${curStyle}`}>{"‎"}</button>)
    //                 }
    //             }
 
    //         }
    //         test.push(<div>{cur}</div>)
    //     }
    //     return (
    //         <div>{test}</div>
    //     )
    // }
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
                    <RenderSeats seatdata={(seatdata)} />
                </div>
            </div >
        </>
    )
}