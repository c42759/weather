import {useEffect, useState} from "react";

export default function Chart({cities}) {
    const [tempMin, setTempMin] = useState(false)
    const [tempMax, setTempMax] = useState(false)
    const [tempRange, setTempRange] = useState(false)

    useEffect(() => {
        let min = false
        let max = false

        Object.entries(cities).map(([key, city]) => {
            let temperature = parseInt(city.main.temp)

            if (min === false || temperature < min) {
                min = temperature
            }

            if (max === false || temperature > max) {
                max = temperature
            }
        })

        setTempMin(min)
        setTempMax(max)
        setTempRange(max - min)
    }, [cities])

    return (
        <div className={`grid grid-cols-${Object.entries(cities).length > 3 ? Object.entries(cities).length : 3} gap-4`}>
            {Object.entries(cities).map(([key, city]) => {
                let name = city.name
                let temperature = parseInt(city.main.temp)

                let temperatureMarker = temperature - tempMin

                let barSize = (80 / tempRange * temperatureMarker) + 10

                return (
                    <div key={key}>
                        <div className={"grid grid-cols-4 items-end"} style={{height: "475px"}}>
                            <div className={"col-start-2 col-span-2 bg-gray-400"}
                                 style={{height: `${barSize}%`}}>&nbsp;</div>
                        </div>
                        <div className={"grid grid-cols-2 border-t border-t-gray-400 pt-4"}>
                            <div className={"text-gray-400 lowercase pl-6"}>{name}</div>
                            <div className={"text-right pr-6"}>{temperature}º</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}