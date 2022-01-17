import moment from "moment"

import { useEffect, useState } from "react"
import { getCityForecast } from "../services/cities"

export default function CityForecast({ cityName }) {
    const [forecast, setForecast] = useState({})
    const [temperatures, setTemperatures] = useState({})

    useEffect(async () => {
        const res = await getCityForecast(cityName)

        setForecast(res)

        const temps = {}

        res.list.map((city) => {
            let day = moment.unix(city.dt).format("dddd").toLowerCase()

            if (temps[day] === undefined) {
                temps[day] = {}
            }

            const temp_min = parseInt(city.main.temp_min)
            const temp_max = parseInt(city.main.temp_max)

            if (temps[day].temp_min === undefined || temp_min < temps[day].temp_min) {
                temps[day].temp_min = temp_min
            }

            if (temps[day].temp_max === undefined || temp_max > temps[day].temp_max) {
                temps[day].temp_max = temp_max
            }
        })

        setTemperatures(temps)
    }, [])

    return (
        <div className={"col-span-2"}>
            <h1 className="text-5xl pb-3"><br/></h1>
            <h2 className="font-light text-2xl uppercase tracking-widest pb-12">Forecast</h2>
            <hr className={"border-t-gray-400"} />
            <div>
                {Object.entries(temperatures).map(([weekDay, data]) => {
                    return (
                        <div key={weekDay} className={"grid grid-cols-2 gap-4 pt-6"}>
                            <div className={"text-gray-400"}>{weekDay}</div>
                            <div className={"grid grid-cols-2 text-center"}>
                                <div className={"border-r border-r-gray-400"}>
                                    <span className={"text-gray-400 mr-4"}>min</span> {data.temp_min}º
                                </div>
                                <div>
                                    <span className={"text-gray-400 mr-4"}>max</span> {data.temp_max}º
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}