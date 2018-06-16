import { initOptions } from "../../helpers";
import { pick } from "../utils";
import namePrefixes from "./namePrefixes";

export default options => {
    options = initOptions(options, { gender: "all" });
    return options.full ?
        pick(namePrefixes(options.gender)).name :
        pick(namePrefixes(options.gender)).abbreviation;
}