import { floating } from "../basics";
import { initOptions } from "../../helpers";

export default options => {        // By default, a somewhat more sane max for dollar than all available numbers
    options = initOptions(options, {max : 10000, min : 0});

    var dollar = floating({min: options.min, max: options.max, fixed: 2}).toString(),
        cents = dollar.split('.')[1];

    if (cents === undefined) {
        dollar += '.00';
    } else if (cents.length < 2) {
        dollar = dollar + '0';
    }

    if (typeof dollar === "number" && dollar < 0) {
        return '-$' + `${dollar}`.replace('-', '');
    } else {
        return '$' + dollar;
    }

}