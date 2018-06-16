import { get } from "../utils";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options, { country: 'uk' });
    return get("counties")[options.country.toLowerCase()];
}