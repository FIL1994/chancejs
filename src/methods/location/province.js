import { pick } from "../utils";
import { provinces } from "./";

export default options => {
    return (options && options.full) ?
        pick(provinces(options)).name :
        pick(provinces(options)).abbreviation;
}