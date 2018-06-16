import { initOptions } from "../../helpers";
import { pick } from "../utils";

export default (options) => {
    options = initOptions(options, {extraGenders: []});
    return pick(['Male', 'Female'].concat(options.extraGenders));  
}