import React from "react";
import Dropdown from "./Dropdown";

export default function Header() {
    return (
        <div className="w-1/3 h-full bg-sky-600">
            <h1 className="text-center text-white text-5xl font-bold">Hex Graph</h1>
            <Dropdown optionList={["option1", "option2"]}/>
        </div>
    )
}