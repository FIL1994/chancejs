import { HEX_POOL } from "../../constants";
import { initOptions } from "../../helpers";
import { string } from "../basics";

export default options => {
    options = initOptions(options, {length : 40, casing: 'lower'});
    var pool = options.casing === 'upper' ? HEX_POOL.toUpperCase() : HEX_POOL;
    return string({pool: pool, length: options.length});
}