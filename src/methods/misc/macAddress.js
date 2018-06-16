import { string } from "../basics";
import { n } from "../utils";
import { initOptions } from "../../helpers";

export default options => {
    // typically mac addresses are separated by ":"
    // however they can also be separated by "-"
    // the network variant uses a dot every fourth byte

    options = initOptions(options);
    if(!options.separator) {
        options.separator =  options.networkVersion ? "." : ":";
    }

    var mac_pool="ABCDEF1234567890",
        mac = "";
    if(!options.networkVersion) {
        mac = n(string, 6, { pool: mac_pool, length:2 }).join(options.separator);
    } else {
        mac = n(string, 3, { pool: mac_pool, length:4 }).join(options.separator);
    }

    return mac;
}