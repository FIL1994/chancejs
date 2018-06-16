import { natural } from "../basics";
import { pad } from "../../helpers";

export default function plNip() {
    var number = natural({min: 1, max: 999999999});
    var arr = pad(number, 9).split('');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }

    var controlNumber = (6 * arr[0] + 5 * arr[1] + 7 * arr[2] + 2 * arr[3] + 3 * arr[4] + 4 * arr[5] + 5 * arr[6] + 6 * arr[7] + 7 * arr[8]) % 11;
    if(controlNumber === 10) {
        return plNip();
    }

    return arr.join('') + controlNumber;
}