import { initOptions } from "../../helpers";
import { pickone, weighted } from "../utils";
import { rpg } from "../dice";

/**
 * @returns {string}
 */
export default options => {
    options = initOptions(options, { include_prerelease: true });

    var range = pickone(["^", "~", "<", ">", "<=", ">=", "="]);
    if (options.range) {
        range = options.range;
    }

    var prerelease = "";
    if (options.include_prerelease) {
        prerelease = weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1]);
    }
    
    const res = /** @type {number[]} */(rpg('3d10'));
    return range + res.join('.') + prerelease;
}