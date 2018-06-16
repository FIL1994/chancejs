import { initOptions } from "../../helpers";
import { pick } from "../utils";
import nameSuffixes from "./nameSuffixes";

export default (options) => {
    options = initOptions(options);
    return options.full ?
        pick(nameSuffixes()).name :
        pick(nameSuffixes()).abbreviation;    
}