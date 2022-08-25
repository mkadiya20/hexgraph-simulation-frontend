import React from 'react';
import { DropdownList } from '../interface/Dropdown.interface';

export default function Dropdown(props: DropdownList) {
    return (
        <div className='dropdown'>
            <button
        className="my-2 lg:my-0 w-30 p-1 text-blueGray-600 relative bg-white text-sm border border-blueGray300 outline-none shadow-lg rounded-lg flex flex-row items-center justify-between"
            >
            <p className="text-left whitespace-nowrap w-40 overflow-hidden text-ellipsis">Test</p>
        </button>
        </div>
    )
}