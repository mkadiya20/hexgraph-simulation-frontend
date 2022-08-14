import React from "react";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="flex flex-row h-screen">
            <Header />
            <div className="w-full h-full bg-slate-800">
                <h1 className="text-center text-white">Home</h1>
            </div>
        </div>
    )
}