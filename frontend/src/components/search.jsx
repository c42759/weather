import {useState} from "react"
import SearchModal from "./searchModal"

export default function Search ({ setCity }) {
    const [active, setActive] = useState(false)

    return (
        <>
            <span className={"select-none cursor-pointer"} onClick={() => setActive(true)}>+ Search</span>
            {active ? <SearchModal setCity={setCity} disableModal={() => {setActive(false)}} /> : null}
        </>
    )
}