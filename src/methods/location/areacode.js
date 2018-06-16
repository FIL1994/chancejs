import { initOptions } from "../../helpers";
import { natural } from "../basics";

export default options => {
    options = initOptions(options, {parens : true});
    // Don't want area codes to start with 1, or have a 9 as the second digit
    // var areacode = natural({min: 2, max: 9}).toString() +
    //         natural({min: 0, max: 8}).toString() +
    //         natural({min: 0, max: 9}).toString();

    const [one, two, three] = [
        natural({min: 2, max: 9}), 
        natural({min: 0, max: 8}), 
        natural({min: 0, max: 9})
    ];
    const areacode = `${one}${two}${three}`;

    return options.parens ? `(${areacode})` : areacode;    
}