import { GiHamburgerMenu } from 'react-icons/gi'
import { RiBarChartFill, RiDashboardFill } from "react-icons/ri"

export default function Footer ({ dashboard, setDashboard, table, setTable, chart, setChart }) {

    function enableDashboard() {
        setDashboard(true)
        setTable(false)
        setChart(false)
    }

    function enableTable() {
        setDashboard(false)
        setTable(true)
        setChart(false)
    }

    function enableChart() {
        setDashboard(false)
        setTable(false)
        setChart(true)
    }

    return (
        <>
            {!dashboard ? <span className={"inline-block mx-6 select-none cursor-pointer"} onClick={() => enableDashboard()}>
                <RiDashboardFill className={"inline-block"} /> Dashboard View
            </span> : null}

            {!table ? <span className={"inline-block mx-6 select-none cursor-pointer"} onClick={() => enableTable()}>
                <GiHamburgerMenu className={"inline-block"} /> Table View
            </span> : null}

            {!chart ? <span className={"inline-block mx-6 select-none cursor-pointer"} onClick={() => enableChart()}>
                <RiBarChartFill className={'inline-block'} /> Chart View
            </span> : null}
        </>
    )
}