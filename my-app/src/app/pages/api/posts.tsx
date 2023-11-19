import { MongoClient } from 'mongodb';

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        const client = new MongoClient(process.env, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();
            const db = client.db();
            const posts = await db.collection('posts').find({}).toArray();

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Unable to connect to database' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ error: 'Unsupported HTTP method' });
    }
}