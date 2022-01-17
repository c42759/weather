import moment from "moment"

import CityWidget from "./cityWidget"
import CityForecast from "./cityForecast"

export default function Dashboard({cities, delCity}) {
    // Handle when cities list is empty
    if (!Object.keys(cities).length) {
        return (
            <div className={"text-center uppercase text-gray-400 h-96 pt-24"}>
                <div className={"relative h-full"}>
                    <div className={"min-h-full grid grid-cols-1 gap-4 content-center"}>
                        No city selected
                    </div>
                </div>
            </div>
        )
    }

    // Handle cities list
    return (
        <div className={"grid grid-cols-3 gap-40"} style={{height: "534px", overflow: "overlay"}}>
            {Object.entries(cities).map(([key, city]) => {
                let name = city.name

                let temperature = parseInt(city.main.temp)
                let temperatureMin = parseInt(city.main.temp_min)
                let temperatureMax = parseInt(city.main.temp_max)

                let sunrise = moment.unix(city.sys.sunrise).format("hh:mm A")
                let sunset = moment.unix(city.sys.sunset).format("hh:mm A")

                return <CityWidget key={key} cityName={name} overcast={city.weather[0].description}
                                   iconCode={city.weather[0].icon} iconDescription={city.weather[0].description}
                                   temperature={temperature} temperatureMin={temperatureMin}
                                   temperatureMax={temperatureMax} sunrise={sunrise} sunset={sunset}
                                   delCity={delCity}/>
            })}

            {Object.keys(cities).length === 1 ? Object.entries(cities).map(([key, city]) => {
                let name = city.name

                return <CityForecast key={key} cityName={name} />
            }) : null}
        </div>
    )
}