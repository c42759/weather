export default function CityWidget(cityName, overcast, temperature, temperatureMin, temperatureMax) {
    return (
        <>
            <h1 className="text-center font-bold uppercase tracking-wide text-6xl">Aveiro</h1>
            <h2 className="text-center font-light uppercase tracking-wide">Overcast Clouds</h2>
            <hr />
            <div className="grid grid-flow-col auto-cols-max">
                <div className={"inline-block align-middle"}>Icon</div>
                <div className="text-right font-light text-9xl">24º</div>
            </div>
            <div className={"grid grid-cols-2"}>
                <div>
                    <span className="text-gray-300">min</span> 12º
                </div>
                <div className={"text-right"}
                    <span className="text-gray-300">max</span> 25º
                </div>
            </div>
        </>
    )
}