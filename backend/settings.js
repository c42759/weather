import dotenv from "dotenv"

dotenv.config()

export const port = 3000

export const externalWeatherAPI = "https://api.openweathermap.org/data/2.5"
export const appId = process.env.WEATHER_API_KEY

export const cacheTime = 60 // minutes