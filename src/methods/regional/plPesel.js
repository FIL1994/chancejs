import { natural } from "../basics";
import { pad } from "../../helpers";

export default () => {
    var number = natural({min: 1, max: 9999999999});
    var arr = pad(number, 10).split('');
    for (var i = 0; i < arr.length; i++) {
        // @ts-ignore
        arr[i] = parseInt(arr[i]);
    }

    // @ts-ignore
    var controlNumber = (1 * arr[0] + 3 * arr[1] + 7 * arr[2] + 9 * arr[3] + 1 * arr[4] + 3 * arr[5] + 7 * arr[6] + 9 * arr[7] + 1 * arr[8] + 3 * arr[9]) % 10;
    if(controlNumber !== 0) {
        controlNumber = 10 - controlNumber;
    }

    return arr.join('') + controlNumber;
}