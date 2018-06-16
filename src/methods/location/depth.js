import { initOptions } from "../../helpers";
import { floating } from "../basics";

export default options => {
    options = initOptions(options, {fixed: 5, min: -10994, max: 0});
    return floating({min: options.min, max: options.max, fixed: options.fixed})
}