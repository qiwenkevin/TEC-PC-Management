export default function Home() {
    const RenderSeats = () => {
        let test = []
        let broken = [[2, 2], [3, 4]]
        let taken = [[5, 3], [6, 7]]
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
                    cur.push(<button className={`${curStyle}`}>{ }</button>)
                }
                else {
                    if (curBroken) {
                        cur.push(<button className={`${curStyle} bg-slate-500`} disabled><span>{i.toString() + j.toString()}</span></button>)
                    } else if (curTaken) {
                        cur.push(<button className={`${curStyle} bg-red-500`} disabled>{i.toString() + j.toString()}</button>)
                    } else {
                        cur.push(<button className={`${curStyle} bg-green-500`}>{i.toString() + j.toString()}</button>)
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

        return (
            <table className="">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <>
            <RenderTable />
        </>
    )
}