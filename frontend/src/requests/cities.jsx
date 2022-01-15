import axios from "axios";
import API_URL from "../settings"

export function getCity(city) {
    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/cities/`, {"city": city})
            .then((res) => resolve(res.data))
    });
}