
import express from "express"
import morgan from "morgan"
import axios from "axios"

import { port, externalWeatherAPI, appId, cacheTime } from "./settings.js"
import { initReplaceAll } from "./lib.js"

initReplaceAll()

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) // log requests

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next)=> {
    // middleware for every request
    next()
});

// global variables
const cities = {}


app.get('/', (req, res) => {
    res.send({status: 'OK'})
});

app.post('/cities/', async (req, res) => {

    if (req.body["city"] === undefined) {
        return res.status(403).json({details: "__city_field_is_missing__"}, )
    }

    const city = req.body["city"].toLowerCase()

    if (cities[city] !== undefined && (new Date().getTime() - cities[city]["retrieved_at"]) <= cacheTime * 1000) {
        return res.json(cities[city])
    }

    await axios.get(`${externalWeatherAPI}/weather`, {params: {appid: appId, q: city}})
        .then((response) => {
            const data = response.data
            data['retrieved_at'] = new Date().getTime()

            cities[city] = response.data
        }).catch((error) => {
            let message = error.response.data.message
            return res.json(`__${message.replaceAll(" ", "_")}__`)
        })

    return res.json(cities[city])
})

const server = app.listen(port, () => {
    console.log(`API Server listening at http://localhost:${port}`)
});