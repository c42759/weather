import axios from "axios";
import { API_URL } from "../settings"

export function getCity(cityName) {
    const url = `${API_URL}/cities/`

    return new Promise((resolve, reject) => {
        axios
            .post(url, {"city": cityName})
            .then((res) => resolve(res.data))
    });
}

export function getCityForecast(cityName) {
    const url = `${API_URL}/cities/forecast/`

    return new Promise((resolve, reject) => {
        axios
            .post(url, {"city": cityName})
            .then((res) => resolve(res.data))
    });
}