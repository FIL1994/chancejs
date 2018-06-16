import { initOptions } from "../../helpers";
import { pick } from "../utils";
import { countries } from "./";

export default options => {
    options = initOptions(options);
    const country = pick(countries())
    return options.raw ? 
        country : 
        options.full ? 
            country.name : 
            country.abbreviation;
}