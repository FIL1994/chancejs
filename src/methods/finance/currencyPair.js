import { currency } from ".";
import { unique } from "../../helpers";

export default returnAsString => {
    var currencies = unique(currency, 2, {
        comparator: function(arr, val) {

            return arr.reduce(function(acc, item) {
                // If a match has been found, short circuit check and just return
                return acc || (item.code === val.code);
            }, false);
        }
    });

    if (returnAsString) {
        return `${currencies[0].code}/${currencies[1].code}`;
    } else {
        return currencies;
    }
}