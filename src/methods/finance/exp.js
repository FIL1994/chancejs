import { initOptions } from "../../helpers";
import { expYear, expMonth } from "./";

export default options => {
    options = initOptions(options);
    var exp = {};

    exp.year = expYear();

    // If the year is this year, need to ensure month is greater than the
    // current month or this expiration will not be valid
    if (exp.year === (new Date().getFullYear()).toString()) {
        exp.month = expMonth({future: true});
    } else {
        exp.month = expMonth();
    }

    return options.raw ? exp : `${exp.month}/${exp.year}`;    
}