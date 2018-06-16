import { pick } from "../utils";
import { initOptions } from "../../helpers";
import { streetSuffixes } from "./";

export default options => {
    options = initOptions(options, { country: 'us' });
    return pick(streetSuffixes(options));
}