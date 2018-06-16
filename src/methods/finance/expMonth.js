import { month as monthFn } from "../time";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options);
    var month, month_int,
        // Date object months are 0 indexed
        curMonth = new Date().getMonth() + 1;

    if (options.future && (curMonth !== 12)) {
        do {
            month = monthFn({raw: true}).numeric;
            month_int = parseInt(month, 10);
        } while (month_int <= curMonth);
    } else {
        month = monthFn({raw: true}).numeric;
    }

    return month;
}