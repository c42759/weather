import {useEffect, useState} from "react";
import {getCity} from "../services/cities";


export default function SearchModal({ setCity, disableModal }) {
    const [text, setText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const errorPool = {"__city_not_found__": "Given city was not found."}

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await getCity(text.toLowerCase())

            let cityName = res.name.toLowerCase()

            setCity(cityName, res) // Add city to the list

            setText("") // Reset field value
            setErrorMessage("")
            disableModal()
        } catch (e) {
            setErrorMessage(errorPool[e])
        }
    }

    function handleEsc(event) {
        if (event.keyCode === 27) {
            disableModal()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleEsc)
        return () => {
            window.removeEventListener("keydown", handleEsc)
        };
    }, []);

    return (
        <div className={"absolute top-0 left-0 z-10 w-screen h-full max-h-full bg-white text-center"}>
            <div className={"relative w-screen h-full"}>
                <div className={"h-full grid grid-cols-4 gap-4 content-center"}>
                    <div className={"col-start-2 col-span-2"}>
                        <form onSubmit={handleSubmit}>
                            <input type={"text"} placeholder={"Aveiro..."} value={text}
                                   onChange={(e) => setText(e.target.value)}
                                   className={"w-full outline-0 border-b border-b-gray-400 " +
                                       "text-light text-2xl text-center uppercase"} />
                            <p className={"text-base text-center text-gray-400"}>write a city name and press enter, "ESC" to close.</p>
                            <p className={"text-red-500"}>{errorMessage ? errorMessage : <br />}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}