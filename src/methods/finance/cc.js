import { initOptions } from "../../helpers";
import { ccType } from "./";
import { n } from "../utils";
import { integer } from "../basics";
import { luhnCalculate } from "../hash";

export default options => {
    options = initOptions(options)
    
    var type, number, to_generate;

    type = (options.type) ?
                ccType({ name: options.type, raw: true }) :
                ccType({ raw: true });

    number = type.prefix.split("");
    to_generate = type.length - type.prefix.length - 1;

    // Generates n - 1 digits
    number = number.concat(n(integer, to_generate, {min: 0, max: 9}));

    // Generates the last digit according to Luhn algorithm
    number.push(luhnCalculate(number.join("")));

    return number.join("");
}