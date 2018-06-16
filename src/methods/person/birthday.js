import { date } from "../time";
import { age as ranAge } from "../person";
import { initOptions } from "../../helpers";

export default (options) => {
    var age = ranAge(options);
    var currentYear = new Date().getFullYear();

    if (options && options.type) {
        var min = new Date();
        var max = new Date();
        min.setFullYear(currentYear - age - 1);
        max.setFullYear(currentYear - age);

        options = initOptions(options, {
            min: min,
            max: max
        });
    } else {
        options = initOptions(options, {
            year: currentYear - age
        });
    }

    return date(options);
}