import React from 'react';
// import ReactDOM from 'react-dom';

import CityWidget from "./components/cityWidget";


export default function App() {
    return (
        <>
            <div className={"w-96"}>
                <div className={"grid grid-cols-2"}>
                    <div className={"font-light uppercase tracking-wide"}>+ Search</div>
                    <div className={"text-right font-light uppercase tracking-wide text-gray-300"}>October, 28th</div>
                </div>
                <div className={"grid grid-cols-3 gap-40"}>
                    <CityWidget className="text-gray-800" />
                </div>
            </div>
        </>
    )
}