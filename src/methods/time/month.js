import pick from "../pick";
import { months } from "./";
import { initOptions, testRange } from "../../helpers";

const month = (options) => {
    options = initOptions(options, {min: 1, max: 12});

    testRange(options.min < 1, "Chance: Min cannot be less than 1.");
    testRange(options.max > 12, "Chance: Max cannot be greater than 12.");
    testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");

    var month = pick(months().slice(options.min - 1, options.max));
    return options.raw ? month : month.name;    
}

export default month;