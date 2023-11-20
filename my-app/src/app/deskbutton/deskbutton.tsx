"use client"

import React, {useState} from "react"

// buttondata [state, title]
export default function SetButton({buttondata}: any) {

    const[buttonColor, setButtonColor] = useState(["bg-green-500", "bg-green-200"]);
    let curStyle = "p-3 h-10 w-20 m-1 rounded-md items-center font-mono"
    let colors = ["bg-green-500", "bg-red-500", "bg-slate-500"]
    let hoverColor = ["bg-green-200", "bg-red-200", "bg-slate-200"]
    let curColor = 0
    let test = (curColor + 1) % colors.length
    // Not occupied
    if(buttondata[0] == 0) {
        return(
            <>
                <button className={`${curStyle} ${buttonColor[0]} hover:${buttonColor[1]} active:scale-90 transform transition-transform active:drop-shadow-md`} onClick={() => setButtonColor(["bg-red-500", "bg-red-500"])}>
                    {`${buttondata[1]}`}
                </button>
            </>
        );
    }

    // Broken
    else if(buttondata[0] == 3){
        return(
            <>
                <button className={`${curStyle} bg-slate-500`} onClick={() => setButtonColor([colors[(curColor + 1) % colors.length], hoverColor[(curColor + 1) % colors.length]])}>
                    {`${buttondata[1]}`}
                </button>
            </>
        );
    }

    // Taken
    else if(buttondata[0] == 2) {
        return(
            <>
                <button className={`${curStyle} bg-red-500`} disabled>
                    {`${buttondata[1]}`}
                </button>
            </>
        );
    }

    // Doesn't exist
    else{
        return(
            <>
                <button className={`${curStyle}`} disabled>
                    {"‎"}
                </button>
            </>
        );
    }
}