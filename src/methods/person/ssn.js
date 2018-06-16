import { initOptions } from "../../helpers";
import { string } from "../basics";

export default options => {
    options = initOptions(options, {ssnFour: false, dashes: true});
    var ssn_pool = "1234567890",
        ssn,
        dash = options.dashes ? '-' : '';

    if(!options.ssnFour) {
        ssn = string({pool: ssn_pool, length: 3}) + dash +
        string({pool: ssn_pool, length: 2}) + dash +
        string({pool: ssn_pool, length: 4});
    } else {
        ssn = string({pool: ssn_pool, length: 4});
    }
    return ssn;    
}