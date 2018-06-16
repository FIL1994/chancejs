import { initOptions } from "../../helpers";
import { string } from "../basics";

export default options => {
    options = initOptions(options, {onlyLastFour: false, separatedByWhiteSpace: true});
    var aadhar_pool = "1234567890",
        aadhar,
        whiteSpace = options.separatedByWhiteSpace ? ' ' : '';

    if(!options.onlyLastFour) {
        aadhar = string({pool: aadhar_pool, length: 4}) + whiteSpace +
        string({pool: aadhar_pool, length: 4}) + whiteSpace +
        string({pool: aadhar_pool, length: 4});
    } else {
        aadhar = string({pool: aadhar_pool, length: 4});
    }
    return aadhar;    
}