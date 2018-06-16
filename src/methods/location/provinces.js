import { get } from "../utils";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options, { country: 'ca' });
    return get("provinces")[options.country.toLowerCase()];
};
