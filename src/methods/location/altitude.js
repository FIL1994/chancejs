import { floating } from "../basics";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options, {fixed: 5, min: 0, max: 8848});
    return floating({
        min: options.min,
        max: options.max,
        fixed: options.fixed
    });
}