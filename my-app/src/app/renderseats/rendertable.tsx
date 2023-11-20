export default function RenderTable({seatdata}: any) {
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
            let hh = Math.floor(msec / 1000 / 60 / 60)
            var mm = (Math.floor(msec / 1000 / 60) - hh*60)
            cur.push(<td>{hh.toString()+":"+mm.toString()}</td>)
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
                            <th>Time Spent</th>
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