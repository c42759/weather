import React, {useEffect, useState} from 'react';

// import ReactDOM from 'react-dom';
import Dashboard from "./components/dashboard";
import Table from "./components/table";
import Chart from "./components/chart";
import TodayDate from "./components/date";
import Footer from "./components/footer";
import Search from "./components/search";


export default function App() {
    const [dashboard, setDashboard] = useState(true)
    const [table, setTable] = useState(false)
    const [chart, setChart] = useState(false)

    const [cities, setCities] = useState({})

    useEffect(() => {
        return
        setCities(
            {...cities,
                "aveiro": {
                    "coord": {
                        "lon": -8.6455,
                        "lat": 40.6443
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "base": "stations",
                    "main": {
                        "temp": 15.18,
                        "feels_like": 14.27,
                        "temp_min": 13.42,
                        "temp_max": 16,
                        "pressure": 1025,
                        "humidity": 58
                    },
                    "visibility": 10000,
                    "wind": {
                        "speed": 3.14,
                        "deg": 146,
                        "gust": 5.28
                    },
                    "clouds": {
                        "all": 85
                    },
                    "dt": 1642264108,
                    "sys": {
                        "type": 2,
                        "id": 2004836,
                        "country": "PT",
                        "sunrise": 1642233376,
                        "sunset": 1642267872
                    },
                    "timezone": 0,
                    "id": 2742611,
                    "name": "Aveiro",
                    "cod": 200
                },
                "porto": {
                "coord": {
                    "lon": -8.611,
                    "lat": 41.1496
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 13.93,
                    "feels_like": 12.89,
                    "temp_min": 12.38,
                    "temp_max": 15.47,
                    "pressure": 1024,
                    "humidity": 58
                },
                "visibility": 10000,
                "wind": {
                    "speed": 0.89,
                    "deg": 209,
                    "gust": 2.68
                },
                "clouds": {
                    "all": 0
                },
                "dt": 1642264111,
                "sys": {
                    "type": 2,
                    "id": 2020703,
                    "country": "PT",
                    "sunrise": 1642233452,
                    "sunset": 1642267779
                },
                "timezone": 0,
                "id": 2735943,
                "name": "Porto",
                "cod": 200
            },
                "lisbon": {
                    "coord": {
                        "lon": -9.1333,
                        "lat": 38.7167
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "few clouds",
                            "icon": "02d"
                        }
                    ],
                    "base": "stations",
                    "main": {
                        "temp": 14.27,
                        "feels_like": 13.48,
                        "temp_min": 13.08,
                        "temp_max": 15.68,
                        "pressure": 1022,
                        "humidity": 66
                    },
                    "visibility": 10000,
                    "wind": {
                        "speed": 1.03,
                        "deg": 0
                    },
                    "clouds": {
                        "all": 20
                    },
                    "dt": 1642264015,
                    "sys": {
                        "type": 1,
                        "id": 6901,
                        "country": "PT",
                        "sunrise": 1642233185,
                        "sunset": 1642268297
                    },
                    "timezone": 0,
                    "id": 2267057,
                    "name": "Lisbon",
                    "cod": 200
                }})
    }, [])

    function setCity (name, object) {
        setCities({...cities, name: object})
    }

    return (
        <>
            <div className={"text-2xl font-light text-gray-800 px-16 pt-12 pb-4"}>
                <div className={"text-base grid grid-cols-2 pb-6"}>
                    <div className={"font-light uppercase tracking-widest"}>
                        <Search setCity={setCity} />
                    </div>
                    <div className={"z-20 text-right font-light uppercase tracking-widest text-gray-400"}>
                        <TodayDate />
                    </div>
                </div>

                {dashboard ? <Dashboard cities={cities}/> : null}
                {table ? <Table /> : null}
                {chart ? <Chart /> : null}

                <div className={"text-base uppercase text-center pt-12"}>
                    {Object.keys(cities).length ? <Footer dashboard={dashboard} setDashboard={setDashboard}
                                                          table={table} setTable={setTable}
                                                          chart={chart} setChart={setChart} /> : null}
                </div>
            </div>
        </>
    )
}