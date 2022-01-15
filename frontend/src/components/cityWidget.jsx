import {WiDayHail} from "weather-icons-react";

export default function CityWidget({ cityName, overcast, temperature, temperatureMin, temperatureMax, sunrise, sunset }) {
    return (
        <div>
            <h1 className="font-bold text-5xl uppercase tracking-widest pb-3">{cityName}</h1>
            <h2 className="text-2xl text-2xl uppercase tracking-widest pb-12">{overcast}</h2>
            <hr className={"border-t-gray-300"} />
            <div className={"pt-12"}>
                <div className="grid grid-cols-3 pb-4">
                    <div className={"text-center pt-8"}>
                        <WiDayHail size={92} color='#1F2937' />
                    </div>
                    <div className="col-span-2 text-right font-light text-9xl">{temperature}º</div>
                </div>
                {/**/}
                <div className={"grid grid-cols-2 pb-12 text-center"}>
                    <div className={"border-r border-r-gray-300"}>
                        <span className={"text-gray-400 mr-4"}>min</span> {temperatureMin}º
                    </div>
                    <div>
                        <span className={"text-gray-400 mr-4"}>max</span> {temperatureMax}º
                    </div>
                </div>
            </div>
            <hr className={"border-t-gray-300"} />
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