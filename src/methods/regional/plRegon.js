import { natural } from "../basics";
import { pad } from "../../helpers";

export default () => {
    var number = natural({min: 1, max: 99999999});
    var arr = pad(number, 8).split('');
    for (var i = 0; i < arr.length; i++) {
        // @ts-ignore
        arr[i] = parseInt(arr[i]);
    }

    // @ts-ignore
    var controlNumber = (8 * arr[0] + 9 * arr[1] + 2 * arr[2] + 3 * arr[3] + 4 * arr[4] + 5 * arr[5] + 6 * arr[6] + 7 * arr[7]) % 11;
    if(controlNumber === 10) {
        controlNumber = 0;
    }

    return arr.join('') + controlNumber;    
}