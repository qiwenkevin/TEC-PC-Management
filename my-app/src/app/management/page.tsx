export default function Home() {
    // const RenderSeat = () => {
    //     let seatArray = [];
    //     for (let key in seatDetails) {
    //         let colValue = seatDetails[key].map((seatValue, rowIndex) => (
    //             <span key={`${key}.${rowIndex}`} className={styles.seatsHolder}>
    //                 {rowIndex === 0 && <span className={styles.colName}>{key}</span>}
    //                 <span className={getClassNameForSeats(seatValue)} onClick={() => onSeatClick(seatValue, rowIndex, key)}>
    //                     {rowIndex + 1}
    //                 </span>
    //                 {seatDetails && rowIndex === seatDetails[key].length - 1 && <><br /><br /></>}
    //             </span>
    //         ))
    //         seatArray.push(colValue);
    //     }
    //     return (
    //         <div className={styles.seatsLeafContainer}>{seatArray}</div>
    //     )
    // }

    const RenderSeats = () => {
        let test = []
        let broken = [[2, 2], [3, 4]]
        let taken = [[5, 3], [6, 7]]
        let empty = [[1, 1]]
        for (let i = 1; i < 11; i++) {
            let cur = []
            for (let j = 1; j < 11; j++) {
                var curBroken = broken.some(elem => {
                    return JSON.stringify([i, j]) === JSON.stringify(elem);
                });
                var curTaken = taken.some(elem => {
                    return JSON.stringify([i, j]) === JSON.stringify(elem);
                });
                var curEmpty = empty.some(elem => {
                    return JSON.stringify([i, j]) === JSON.stringify(elem);
                });
                let curStyle = "p-3 h-10 w-20 m-1"
                if (curEmpty) {
                    cur.push(<button className={`${curStyle}`}>{ }</button>)
                }
                else {
                    if (curBroken) {
                        curStyle += " bg-slate-500"
                    } else if (curTaken) {
                        curStyle += " bg-red-500"
                    } else {
                        curStyle += " bg-green-500"
                    }
                    cur.push(<button className={`${curStyle}`}>{j}</button>)
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
            <div className="p-1 g-5">
                <RenderSeats />
            </div>
        </>
    )
}