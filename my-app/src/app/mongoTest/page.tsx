import clientPromise from "mongodb";

export default async (req: any, res: any) => {
    const db = await myDB.connect({
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
    })

    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");

        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        res.json(movies);
    } catch (e) {
        console.error(e);
    }
};

//export default function mongoTest() {
//    return (
//        <>
//            <p>test</p>
//        </>
//    );
//}