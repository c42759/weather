import moment from "moment"
import {useEffect, useState} from "react"
import {GoArrowSmallDown, GoArrowSmallUp} from "react-icons/go"

export default function Table({cities}) {
    const ASC = "asc"
    const DESC = "desc"

    const [sortCities, setSortCities] = useState({})

    const [nameDir, setNameDir] = useState(ASC)
    const [sunriseDir, setSunriseDir] = useState(false)
    const [sunsetDir, setSunsetDir] = useState(false)
    const [tempDir, setTempDir] = useState(false)
    const [tempMinDir, setTempMinDir] = useState(false)
    const [tempMaxDir, setTempMaxDir] = useState(false)

    function sortByKeys(sortedKeys, object) {
        setSortCities(sortedKeys.reduce((r, k) => (r[k] = object[k], r), {}))
    }

    function sortByName(o) {
        const dir = nameDir === false ? ASC : (nameDir === ASC ? DESC : ASC)

        // TODO: needs to be refactored to a one line usage
        setNameDir(dir)
        setSunriseDir(false)
        setSunsetDir(false)
        setTempDir(false)
        setTempMinDir(false)
        setTempMaxDir(false)

        const sortedKeys = dir === DESC ? Object.keys(o).reverse() : Object.keys(o).sort()

        sortByKeys(sortedKeys, o)
    }

    function sortBySunrise(o) {
        const dir = sunriseDir === false ? ASC : (sunriseDir === ASC ? DESC : ASC)

        // TODO: needs to be refactored to a one line usage
        setNameDir(false)
        setSunriseDir(dir)
        setSunsetDir(false)
        setTempDir(false)
        setTempMinDir(false)
        setTempMaxDir(false)

        const sortedKeys = Object.keys(o).sort((a,b) => {
            return dir === DESC ? o[b].sys.sunrise - o[a].sys.sunrise : o[a].sys.sunrise - o[b].sys.sunrise
        })

        sortByKeys(sortedKeys, o)
    }

    function sortBySunset(o) {
        const dir = sunsetDir === false ? ASC : (sunsetDir === ASC ? DESC : ASC)

        // TODO: needs to be refactored to a one line usage
        setNameDir(false)
        setSunriseDir(false)
        setSunsetDir(dir)
        setTempDir(false)
        setTempMinDir(false)
        setTempMaxDir(false)

        const sortedKeys = Object.keys(o).sort((a,b) => {
            return dir === DESC ? o[b].sys.sunset - o[a].sys.sunset : o[a].sys.sunset - o[b].sys.sunset
        })

        sortByKeys(sortedKeys, o)
    }

    function sortByTemperature(o) {
        const dir = tempDir === false ? ASC : (tempDir === ASC ? DESC : ASC)

        // TODO: needs to be refactored to a one line usage
        setNameDir(false)
        setSunriseDir(false)
        setSunsetDir(false)
        setTempDir(dir)
        setTempMinDir(false)
        setTempMaxDir(false)

        const sortedKeys = Object.keys(o).sort((a,b) => {
            return dir === DESC ? o[b].main.temp - o[a].main.temp : o[a].main.temp - o[b].main.temp
        })

        sortByKeys(sortedKeys, o)
    }

    function sortByTemperatureMin(o) {
        const dir = tempMinDir === false ? ASC : (tempMinDir === ASC ? DESC : ASC)

        // TODO: needs to be refactored to a one line usage
        setNameDir(false)
        setSunriseDir(false)
        setSunsetDir(false)
        setTempDir(false)
        setTempMinDir(dir)
        setTempMaxDir(false)

        const sortedKeys = Object.keys(o).sort((a,b) => {
            return dir === DESC ? o[b].main.temp_min - o[a].main.temp_min : o[a].main.temp_min - o[b].main.temp_min
        })

        sortByKeys(sortedKeys, o)
    }

    function sortByTemperatureMax(o) {
        const dir = tempMaxDir === false ? ASC : (tempMaxDir === ASC ? DESC : ASC)

        // TODO: needs to be refactored to a one line usage
        setNameDir(false)
        setSunriseDir(false)
        setSunsetDir(false)
        setTempDir(false)
        setTempMinDir(false)
        setTempMaxDir(dir)

        const sortedKeys = Object.keys(o).sort((a,b) => {
            return dir === DESC ? o[b].main.temp_max - o[a].main.temp_max : o[a].main.temp_max - o[b].main.temp_max
        })

        sortByKeys(sortedKeys, o)
    }

    useEffect(() => sortByName(cities), [cities])

    return (
        <div>
            <h1 className="text-5xl pb-3"><br/></h1>
            <h2 className="font-light text-2xl uppercase tracking-widest pb-12 grid grid-cols-7 gap-4">
                <div className={"col-span-2 select-none cursor-pointer"} onClick={() => sortByName(sortCities)}>
                    city {nameDir ? (nameDir === ASC ? <GoArrowSmallUp className={"inline-block"} /> : <GoArrowSmallDown className={"inline-block"} />) : null}
                </div>
                <div className={"select-none cursor-pointer"} onClick={() => sortBySunrise(sortCities)}>
                    sunrise {sunriseDir ? (sunriseDir === ASC ? <GoArrowSmallUp className={"inline-block"} /> : <GoArrowSmallDown className={"inline-block"} />) : null}
                </div>
                <div className={"select-none cursor-pointer"} onClick={() => sortBySunset(sortCities)}>
                    sunset {sunsetDir ? (sunsetDir === ASC ? <GoArrowSmallUp className={"inline-block"} /> : <GoArrowSmallDown className={"inline-block"} />) : null}
                </div>
                <div className={"select-none cursor-pointer"} onClick={() => sortByTemperature(sortCities)}>
                    temp {tempDir ? (tempDir === ASC ? <GoArrowSmallUp className={"inline-block"} /> : <GoArrowSmallDown className={"inline-block"} />) : null}
                </div>
                <div className={"select-none cursor-pointer"} onClick={() => sortByTemperatureMin(sortCities)}>
                    min {tempMinDir ? (tempMinDir === ASC ? <GoArrowSmallUp className={"inline-block"} /> : <GoArrowSmallDown className={"inline-block"} />) : null}
                </div>
                <div className={"select-none cursor-pointer"} onClick={() => sortByTemperatureMax(sortCities)}>
                    max {tempMaxDir ? (tempMaxDir === ASC ? <GoArrowSmallUp className={"inline-block"} /> : <GoArrowSmallDown className={"inline-block"} />) : null}
                </div>
            </h2>
            <hr className={"border-t-gray-400"} />
            <div>
                {Object.entries(sortCities).map(([key, city]) => {
                    let name = city.name

                    let temperature = parseInt(city.main.temp)
                    let temperatureMin = parseInt(city.main.temp_min)
                    let temperatureMax = parseInt(city.main.temp_max)

                    let sunrise = moment.unix(city.sys.sunrise).format("hh:mm A")
                    let sunset = moment.unix(city.sys.sunset).format("hh:mm A")

                    return (
                        <div key={key} className={"pt-4 grid grid-cols-7 gap-4"}>
                            <div className={"col-span-2 text-gray-400 lowercase pl-8"}>{name}</div>
                            <div className={"text-center"}>{sunrise}</div>
                            <div className={"text-center"}>{sunset}</div>
                            <div className={"text-center"}>{temperature}º</div>
                            <div className={"text-center"}>{temperatureMin}º</div>
                            <div className={"text-center"}>{temperatureMax}º</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}