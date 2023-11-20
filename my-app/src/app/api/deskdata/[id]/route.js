import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/mongodb';
import Desk from "../../../models/desk";

export async function PUT(request, { params }) {
    try {
        connectMongoDB();
        const { id } = params;
        const{title, pid, state, row, col} = await request.json()
        //await Desk.findByIdAndUpdate(id, {title, pid, state, row, col})
        await Desk.findByIdAndDelete(id)
        await Desk.create({ title, pid, state, row, col });
        return NextResponse.json({ messsage: "desk updated"}, {status: 200})
    } catch (error) {
        return NextResponse.json({ error: `Failed because of ${error}` }, { status: 500 });  
    }
} 