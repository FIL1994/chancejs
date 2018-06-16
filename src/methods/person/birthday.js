import { date } from "../time";
import { initOptions } from "../../helpers";
import { age } from "../person";


const birthday = (options) => {
    var age = age(options);
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

export default birthday;