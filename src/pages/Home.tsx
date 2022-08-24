import React from "react";
import Header from "../components/Header";
import Hexgrid from "../components/Hexgrid"

export default function Home() {
    return (
        <div className="flex flex-row h-screen">
            <Header />
            <div className="w-full h-full">
                <Hexgrid />
            </div>
        </div>
    )
}