import { initOptions } from "../../helpers";
import { string } from "../basics";

export default options => {
    options = initOptions(options, { length: 7 })
    return string({ length: options.length, pool: '0123456789bcdefghjkmnpqrstuvwxyz' });
}