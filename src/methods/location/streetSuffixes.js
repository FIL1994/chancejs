import { get } from "../utils";
import { initOptions } from "../../helpers";
 
export default options => {
    options = initOptions(options, { country: 'us' });
    // These are the most common suffixes.
    return get("street_suffixes")[options.country.toLowerCase()];
};