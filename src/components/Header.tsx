import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function Header() {
    const [showDropdown, setShowDropDown] = useState<boolean>(false);
    const [selectItem, setSelectItem] = useState<string>("");

    const items = () => {
        return ["Dijkstra", "Ford-Warshall", "A-Star"];
    };

    const toggleDropdown = () => {
        setShowDropDown(!showDropdown);
    };

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    const itemSelection = (item: string) => {
        setSelectItem(item);
    };

    return (
        <div className="flex flex-col space-y-5 w-1/3 h-full bg-sky-600">
            <h1 className="text-center text-white text-5xl font-bold">Hex Graph</h1>
            <div className="flex flex-row space-x-2">
                <div className="ml-5 p-0 text-white">{"Select algorithm"}</div>
                <button
                    className={"basis-1/2 text-gray-800 bg-slate-100 hover:text-sky-600 text-left rounded border border-transparent border-solid"}
                    onClick={() => toggleDropdown()}
                    onBlur={(e) => dismissHandler(e)}
                >
                    <div>{selectItem ? `${selectItem}` : "Select algorithm"}</div>

                    {showDropdown && (
                        <Dropdown
                            itemList={items()}
                            showDropdown={false}
                            toggleDropdown={() => toggleDropdown()}
                            itemSelection={itemSelection}
                        />
                    )}
                </button>
            </div>
        </div>
    )
}