import {AiOutlineCloseCircle} from "react-icons/ai"
import WeatherIcon from "./weatherIcon"

export default function CityWidget({ cityName, iconCode, iconDescription, overcast, temperature, temperatureMin, temperatureMax, sunrise, sunset, delCity }) {

    return (
        <div>
            <AiOutlineCloseCircle className={"float-right mt-2 select-none cursor-pointer"}
                                  title={`Remove ${cityName}`} onClick={() => {delCity(cityName.toLowerCase())}}/>
            <h1 className="font-bold text-5xl uppercase tracking-widest pb-3">{cityName}</h1>
            <h2 className="text-2xl text-2xl uppercase tracking-widest pb-12">{overcast}</h2>
            <hr className={"border-t-gray-400"} />
            <div className={"pt-12"}>
                <div className="grid grid-cols-3 pb-4">
                    <div className={"text-center pt-8"}>
                        <WeatherIcon iconCode={iconCode} iconDescription={iconDescription} />
                    </div>
                    <div className="col-span-2 text-right font-light text-9xl">{temperature}º</div>
                </div>
                {/**/}
                <div className={"grid grid-cols-2 pb-12 text-center"}>
                    <div className={"border-r border-r-gray-400"}>
                        <span className={"text-gray-400 mr-4"}>min</span> {temperatureMin}º
                    </div>
                    <div>
                        <span className={"text-gray-400 mr-4"}>max</span> {temperatureMax}º
                    </div>
                </div>
            </div>
            <hr className={"border-t-gray-400"} />
            <div className={"pt-12"}>
                <div className={"grid grid-cols-2 pb-2"}>
                    <div className={"text-gray-400"}>sunrise</div>
                    <div className={"text-right"}>{sunrise}</div>
                </div>
                <div className={"grid grid-cols-2"}>
                    <div className={"text-gray-400"}>sunset</div>
                    <div className={"text-right"}>{sunset}</div>
                </div>
            </div>
        </div>
    )
}