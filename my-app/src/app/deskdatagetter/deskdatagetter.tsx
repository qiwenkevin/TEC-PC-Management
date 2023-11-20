import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import {GET} from "../api/deskdata/route";
import Desk from "../models/desk";
import { NextResponse } from 'next/server';
import { Navbar2 } from "../Navbar/navbar";
import { AppProps } from 'next/app';
import connectMongoDB from '../libs/mongodb';
import { type } from "os";
import Admin  from "../admin/page";

const loadDataFromServer = async ()=> {
    const jres = await GET()
    // const jres = response.json();
    console.log(jres)
    return jres
}

export default async function senddata() {
    var seatdata = await loadDataFromServer()
    return (
        seatdata
    );
}