import { natural } from "../..";
import { initOptions } from "../../helpers";

const year = (options) => {
    // Default to current year as min if none specified
    options = initOptions(options, {min: new Date().getFullYear()});

    // Default to one century after current year as max if none specified
    options.max = (typeof options.max !== "undefined") ? options.max : options.min + 100;

    return natural(options).toString();
} 

export default year;