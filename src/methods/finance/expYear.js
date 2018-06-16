import { year as yearFn } from "../time";

export default () => {
    var curMonth = new Date().getMonth() + 1,
    curYear = new Date().getFullYear();

    return yearFn({min: ((curMonth === 12) ? (curYear + 1) : curYear), max: (curYear + 10)});    
}