import { initOptions } from "../../helpers";
import { floating } from "../basics";

export default options => {
    options = initOptions(options, {fixed: 5, min: -90, max: 90});
    return floating({min: options.min, max: options.max, fixed: options.fixed});
}