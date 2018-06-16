import { integer, natural } from "../..";
import { initOptions } from "../../helpers";
import get from "../get";
import { hour, month, minute, millisecond, second, year } from "./";

/** @returns {Date | string} */
const date = (options) => {
    var date_string, date;

    // If interval is specified we ignore preset
    if(options && (options.min || options.max)) {
        options = initOptions(options, {
            american: true,
            string: false
        });
        var min = typeof options.min !== "undefined" ? options.min.getTime() : 1;
        // 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. http://es5.github.io/#x15.9.1.1
        var max = typeof options.max !== "undefined" ? options.max.getTime() : 8640000000000000;

        date = new Date(integer({min: min, max: max}));
    } else {
        var m = month({raw: true});
        var daysInMonth = m.days;

        if(options && options.month) {
            // Mod 12 to allow months outside range of 0-11 (not encouraged, but also not prevented).
            daysInMonth = get('months')[((options.month % 12) + 12) % 12].days;
        }

        options = initOptions(options, {
            year: parseInt(year(), 10),
            // Necessary to subtract 1 because Date() 0-indexes month but not day or year
            // for some reason.
            month: m.numeric - 1,
            day: natural({min: 1, max: daysInMonth}),
            hour: hour({twentyfour: true}),
            minute: minute(),
            second: second(),
            millisecond: millisecond(),
            american: true,
            string: false
        });

        date = new Date(options.year, options.month, options.day, options.hour, options.minute, options.second, options.millisecond);
    }

    if (options.american) {
        // Adding 1 to the month is necessary because Date() 0-indexes
        // months but not day for some odd reason.
        date_string = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    } else {
        date_string = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }

    return options.string ? date_string : date;
}

export default date;