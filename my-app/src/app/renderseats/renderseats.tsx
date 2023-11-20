"use client"

import React, {useState} from "react";
import SetButton from "../deskbutton/deskbutton";

export default function RenderSeats({seatdata}: any) {

    const[buttonColor, setButtonColor] = useState(["bg-green-500", "bg-green-200"]);
    //const[hoverColor, setHoverColor] = useState("bg-green-400");

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
            let curDeskIndex = -1
            for (let k = 0; k < Object.keys(seatdata.desks).length; k++){
                let temp = seatdata.desks[k]
                if (temp.row == i && temp.col == j){
                    curDeskIndex = k 
                    if (temp.state == 0){curEmpty = true}
                    else if (temp.state == 1){curBroken = true}
                    else if (temp.state == 2){curTaken = true}
                } 
            } 
            let curStyle = "p-3 h-10 w-20 m-1 rounded-md items-center font-mono"
            if (curDeskIndex == -1){
                cur.push(<SetButton buttondata={ [1, ""] } />);

            }
            else{
                cur.push(<SetButton buttondata={ [seatdata.desks[curDeskIndex].state, seatdata.desks[curDeskIndex].title] } />);
            }
            /* if (curEmpty) { 
                //cur.push(<button className={`${curStyle} ${buttonColor[0]} hover
                //:${buttonColor[1]} active:scale-90 transform transition-transform active:drop-shadow-md`} onClick={() => setButtonColor(["bg-red-500", "bg-red-500"])}>{(seatdata.desks[curDeskIndex].title)}</button>)
                cur.push(<SetButton buttondata={ [seatdata.desks[curDeskIndex].state, seatdata.desks[curDeskIndex].title] } />);
                //cur.push(<SetButton />);
            }
            else if (curBroken) {
                cur.push(<button className={`${curStyle} bg-slate-500`} disabled>{(seatdata.desks[curDeskIndex].title)}</button>)
            } else if (curTaken) {
                cur.push(<button className={`${curStyle} bg-red-500`} disabled>{(seatdata.desks[curDeskIndex].title)}</button>)
            } else {
                cur.push(<button className={`${curStyle}`} disabled>{"‎"}</button>)
            } */
        }
        test.push(<div>{cur}</div>)
    }
    return (
        <div>{test}</div>
    )
}