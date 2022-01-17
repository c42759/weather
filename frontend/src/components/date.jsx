import moment from "moment"

export default function TodayDate() {
    let clock = moment().format('MMMM, Do')

    return (<>{clock}</>)
}