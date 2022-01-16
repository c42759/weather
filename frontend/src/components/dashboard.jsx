import moment from "moment";
import CityWidget from "./cityWidget";
import CityForecast from "./cityForecast";

export default function Dashboard({cities}) {
    return (
        <div className={"grid grid-cols-3 gap-40"}>
            {Object.entries(cities).map(([key, city]) => {
                let name = city.name

                let temperature = parseInt(city.main.temp)
                let temperatureMin = parseInt(city.main.temp_min)
                let temperatureMax = parseInt(city.main.temp_max)

                let sunrise = moment.unix(city.sys.sunrise).format("hh:mm A");
                let sunset = moment.unix(city.sys.sunset).format("hh:mm A");

                return <CityWidget key={key} cityName={name} overcast={city.weather[0].description}
                                   temperature={temperature} temperatureMin={temperatureMin}
                                   temperatureMax={temperatureMax} sunrise={sunrise} sunset={sunset}/>
            })}

            {Object.keys(cities).length === 1 ? (<CityForecast />) : null}
        </div>
    )
}