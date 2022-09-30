import React, { useState, useEffect } from 'react';
import { DropdownList } from '../interface/Dropdown.interface';

export default function Dropdown(props: DropdownList) {
    const [showDropdown, setShowDropDown] = useState<boolean>(false);
    
    const handleClick = (selection: string): void => {
        props.itemSelection(selection);
    }

    useEffect(() => {
        setShowDropDown(showDropdown);
    }, [showDropdown]);

    return (
        <div className={"relative text-gray-800 border"}>
            {props.itemList.map((item: string, index: number) => {
                return (
                    <p
                    className="m-0"
                    key={index}
                    onClick={() => handleClick(item)}
                    >{item}</p>
                )
            })}
        </div>
    )
}