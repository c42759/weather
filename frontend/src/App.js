import React from 'react';
import ReactDOM from 'react-dom';

import CityWidget from "./components/cityWidget";


export default function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <CityWidget />
        </>
    )
}