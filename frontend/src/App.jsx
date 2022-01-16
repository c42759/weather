import React, {useEffect, useState} from 'react';

// import ReactDOM from 'react-dom';
import Dashboard from "./components/dashboard";
import Table from "./components/table";
import Chart from "./components/chart";
import TodayDate from "./components/date";
import Footer from "./components/footer";
import Search from "./components/search";
import CityForecast from "./components/cityForecast";


export default function App() {
    const [dashboard, setDashboard] = useState(true)
    const [table, setTable] = useState(false)
    const [chart, setChart] = useState(false)

    const [cities, setCities] = useState({})

    function setCity (name, object) {
        setCities({...cities, [name]: object})
    }

    function delCity(cityName) {
        let tmpCities = {}

        Object.entries(cities).map(([key, city]) => {
            if (cityName !== key) {
                tmpCities[key] = city
            }
        })

        setCities(tmpCities)
    }

    return (
        <div className={"container relative mx-auto text-2xl font-light text-gray-800 px-16 pt-12 pb-4 bg-white shadow-lg shadow-gray-500/10"}
             style={{width: "1280px", height: "720px"}}>
            <div className={"text-base grid grid-cols-2 pb-6"}>
                <div className={"font-light uppercase tracking-widest"}>
                    <Search setCity={setCity} />
                </div>
                <div className={"z-20 text-right font-light uppercase tracking-widest text-gray-400"}>
                    <TodayDate />
                </div>
            </div>

            {dashboard ? <Dashboard cities={cities} delCity={delCity}/> : null}
            {table ? <Table cities={cities} /> : null}
            {chart ? <Chart cities={cities} /> : null}

            <div className={"text-base uppercase text-center pt-12"}>
                {Object.keys(cities).length ? <Footer dashboard={dashboard} setDashboard={setDashboard}
                                                      table={table} setTable={setTable}
                                                      chart={chart} setChart={setChart} /> : null}
            </div>
        </div>
    )
}