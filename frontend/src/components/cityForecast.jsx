export default function CityWidget(cityName, overcast, temperature, temperatureMin, temperatureMax) {
    return (
        <div className={"col-span-2"}>
            <h1 className="text-5xl pb-3"><br/></h1>
            <h2 className="font-light text-2xl uppercase tracking-widest pb-12">Forecast</h2>
            <hr className={"border-t-gray-300"} />
            <div>
                <div className={"grid grid-cols-2 gap-4 pt-6"}>
                    <div className={"text-gray-300"}>monday</div>
                    <div className={"grid grid-cols-2 text-center"}>
                        <div className={"border-r border-r-gray-300"}>
                            <span className={"text-gray-300 mr-4"}>min</span> 12º
                        </div>
                        <div>
                            <span className={"text-gray-300 mr-4"}>max</span> 25º
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-4 pt-6"}>
                    <div className={"text-gray-300"}>tuesday</div>
                    <div className={"grid grid-cols-2 text-center"}>
                        <div className={"border-r border-r-gray-300"}>
                            <span className={"text-gray-300 mr-4"}>min</span> 12º
                        </div>
                        <div>
                            <span className={"text-gray-300 mr-4"}>max</span> 25º
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-4 pt-6"}>
                    <div className={"text-gray-300"}>wednesday</div>
                    <div className={"grid grid-cols-2 text-center"}>
                        <div className={"border-r border-r-gray-300"}>
                            <span className={"text-gray-300 mr-4"}>min</span> 12º
                        </div>
                        <div>
                            <span className={"text-gray-300 mr-4"}>max</span> 25º
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-4 pt-6"}>
                    <div className={"text-gray-300"}>thursday</div>
                    <div className={"grid grid-cols-2 text-center"}>
                        <div className={"border-r border-r-gray-300"}>
                            <span className={"text-gray-300 mr-4"}>min</span> 12º
                        </div>
                        <div>
                            <span className={"text-gray-300 mr-4"}>max</span> 25º
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-4 pt-6"}>
                    <div className={"text-gray-300"}>friday</div>
                    <div className={"grid grid-cols-2 text-center"}>
                        <div className={"border-r border-r-gray-300"}>
                            <span className={"text-gray-300 mr-4"}>min</span> 12º
                        </div>
                        <div>
                            <span className={"text-gray-300 mr-4"}>max</span> 25º
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-4 pt-6"}>
                    <div className={"text-gray-300"}>saturday</div>
                    <div className={"grid grid-cols-2 text-center"}>
                        <div className={"border-r border-r-gray-300"}>
                            <span className={"text-gray-300 mr-4"}>min</span> 12º
                        </div>
                        <div>
                            <span className={"text-gray-300 mr-4"}>max</span> 25º
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-4 pt-6"}>
                    <div className={"text-gray-300"}>sunday</div>
                    <div className={"grid grid-cols-2 text-center"}>
                        <div className={"border-r border-r-gray-300"}>
                            <span className={"text-gray-300 mr-4"}>min</span> 12º
                        </div>
                        <div>
                            <span className={"text-gray-300 mr-4"}>max</span> 25º
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}