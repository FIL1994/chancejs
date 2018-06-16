import { states } from "../";
import { pick } from "../utils";

export default options => {
    return (options && options.full) ?
    pick(states(options)).name :
    pick(states(options)).abbreviation;    
}