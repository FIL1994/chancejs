import { initOptions } from "../../helpers";
import { integer } from "../basics";

export default options => {
    var min = 40;
    var max = 320;
    options = initOptions(options, {min: min, max: max});
    return integer({min: options.min, max: options.max});
}