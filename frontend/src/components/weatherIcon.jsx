import {WiDaySunny, WiNightClear, WiDayCloudyHigh, WiNightAltCloudy, WiCloud, WiCloudy, WiRain, WiNightAltRain, WiDayLightning, WiNightLightning, WiDaySnow, WiNightAltSnow, WiDayFog, WiNightFog} from "weather-icons-react";

export default function WeatherIcon({iconCode, iconDescription}) {
    if (iconCode === "01d") {
        return (<WiDaySunny  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "01n") {
        return (<WiNightClear  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "02d") {
        return (<WiDayCloudyHigh  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "02n") {
        return (<WiNightAltCloudy  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "03d" || iconCode === "03n") {
        return (<WiCloud  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "04d" || iconCode === "04n") {
        return (<WiCloudy  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "09d") {
        return (<WiRain  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "09n") {
        return (<WiNightAltRain  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "10d") {
        return (<WiRain  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "10n") {
        return (<WiNightAltRain  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "11d") {
        return (<WiDayLightning  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "11n") {
        return (<WiNightLightning  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "13d") {
        return (<WiDaySnow  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "13n") {
        return (<WiNightAltSnow  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "50d") {
        return (<WiDayFog  size={92} color="#1F2937" title={iconDescription} />)
    }

    if (iconCode === "50n") {
        return (<WiNightFog  size={92} color="#1F2937" title={iconDescription} />)
    }

}