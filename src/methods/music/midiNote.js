import {integer} from "../basics";
import {initOptions} from "../../helpers";

export default options => {
    var min = 0;
    var max = 127;
    options = initOptions(options, { min, max });
    return integer({min: options.min, max: options.max});    
}