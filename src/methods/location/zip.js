import { n } from "../utils";
import { natural } from "../basics";

export default options => {
    var zip = n(natural, 5, {max: 9});

    if (options && options.plusfour === true) {
        zip.push('-');
        zip = zip.concat(n(natural, 4, {max: 9}));
    }

    return zip.join("");
}