import { initOptions } from "../../helpers";
import { string } from "../basics";

export default options => {
    options = initOptions(options, { version: 5 });

    var guid_pool = "abcdef1234567890",
        variant_pool = "ab89",
        guid = string({ pool: guid_pool, length: 8 }) + '-' +
               string({ pool: guid_pool, length: 4 }) + '-' +
               // The Version
               options.version +
               string({ pool: guid_pool, length: 3 }) + '-' +
               // The Variant
               string({ pool: variant_pool, length: 1 }) +
               string({ pool: guid_pool, length: 3 }) + '-' +
               string({ pool: guid_pool, length: 12 });
    return guid;
}