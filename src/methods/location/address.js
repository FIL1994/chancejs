import { initOptions } from "../../helpers";
import { natural } from "../basics";
import { street } from "../"

export default options => {
    options = initOptions(options);
    return natural({min: 5, max: 2000}) + ' ' + street(options);
}