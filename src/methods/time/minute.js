import { initOptions, testRange } from "../../helpers";
import { natural } from "../..";

const minute = (options) => {
    options = initOptions(options, {min: 0, max: 59});

    testRange(options.min < 0, "Chance: Min cannot be less than 0.");
    testRange(options.max > 59, "Chance: Max cannot be greater than 59.");
    testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");

    return natural({min: options.min, max: options.max});
}

export default minute;