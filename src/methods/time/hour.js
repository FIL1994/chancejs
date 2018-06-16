import { initOptions, testRange } from "../../helpers";
import { natural } from "../..";

const hour = (options) => {
    options = initOptions(options, {
        min: options && options.twentyfour ? 0 : 1,
        max: options && options.twentyfour ? 23 : 12
    });

    testRange(options.min < 0, "Chance: Min cannot be less than 0.");
    testRange(options.twentyfour && options.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option.");
    testRange(!options.twentyfour && options.max > 12, "Chance: Max cannot be greater than 12.");
    testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");

    return natural({min: options.min, max: options.max});
}

export default hour;