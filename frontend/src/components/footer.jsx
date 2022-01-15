import { GiHamburgerMenu } from 'react-icons/gi';
import { RiBarChartFill } from "react-icons/ri";

export default function Footer () {
    return (
        <>
            <span>
                <GiHamburgerMenu className={'inline-block'} /> Table View
            </span>
            <span className={"inline-block ml-10"}>
                <RiBarChartFill className={'inline-block'} /> Chart View
            </span>
        </>
    )
}