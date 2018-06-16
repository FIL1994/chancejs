import { initOptions } from "../../helpers";
import { first, prefix, suffix } from "../person";
import { character } from "../basics";

export default (options) => {
    options = initOptions(options);

    var first = first(options),
        last = last(options),
        name;

    if (options.middle) {
        name = first + ' ' + first(options) + ' ' + last;
    } else if (options.middle_initial) {
        name = first + ' ' + character({alpha: true, casing: 'upper'}) + '. ' + last;
    } else {
        name = first + ' ' + last;
    }

    if (options.prefix) {
        name = prefix(options) + ' ' + name;
    }

    if (options.suffix) {
        name = name + ' ' + suffix(options);
    }

    return name;
}