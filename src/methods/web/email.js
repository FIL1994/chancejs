import { initOptions } from "../../helpers";
import { word } from "../text";
import { domain } from "./";

export default options => {
    options = initOptions(options);
    return word({length: options.length}) + '@' + (options.domain || domain());
}