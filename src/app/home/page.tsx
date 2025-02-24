'use client'
import { Header } from "@/components/Header";
import { title } from "process";
import { useEffect, useRef } from 'react';
import "../globals.css"
import Carousel from "./app";

export default function Page(){

    return (
        <div className="bg-base-100">
            <Header />
            <Carousel />

        </div>

    )
}