import { ccTypes } from "./";
import { initOptions } from "../../helpers";
import { pick } from "../utils";

export default options => {
    options = initOptions(options);
    var types = ccTypes(),
        type = null;

    if (options.name) {
        for (var i = 0; i < types.length; i++) {
            // Accept either name or short_name to specify card type
            if (types[i].name === options.name || types[i].short_name === options.name) {
                type = types[i];
                break;
            }
        }
        if (type === null) {
            throw new RangeError("Chance: Credit card type '" + options.name + "' is not supported");
        }
    } else {
        type = pick(types);
    }

    return options.raw ? type : type.name;    
}