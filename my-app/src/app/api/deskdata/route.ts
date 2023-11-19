import { NextResponse } from 'next/server';
import clientPromise from "../../libs/mongodb";
import connectMongoDB from '../../libs/mongodb';
import Topic from "../../models/topic";
import Desk from "../../models/desk";


export async function GET() {
    try {
        connectMongoDB();
        const desks = await Desk.find();
        return NextResponse.json({desks});
        //return {props: {desks}};
    } catch (error) {
        return NextResponse.json({ error: `Failed because of ${error}` }, { status: 500 });  
    }
}

export async function POST(request: Request) {
    try {
        connectMongoDB();
        const{title, pid, state, row, col} = await request.json();
        await Desk.create({ title, pid, state, row, col });
        return NextResponse.json({ message: 'desk created' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: `Failed because of ${error}` }, { status: 500 });  
    }
}

/* export async function PUT(request: Request) {
    try {
        connectMongoDB();
        const{title, pid, state, row, col} = await request.json();
        await Desk.create({ title, pid, state, row, col });
        return NextResponse.json({ message: 'desk created' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: `Failed because of ${error}` }, { status: 500 });  
    }
} */