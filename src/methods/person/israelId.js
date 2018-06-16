import {string} from "../../"
import { pad } from "../../helpers";

export default () => {
    var x=string({pool: '0123456789',length:8});
    var y=0;
    for (var i=0;i<x.length;i++){
        // @ts-ignore
        var thisDigit=  x[i] *  (i/2===parseInt(i/2) ? 1 : 2);
        // @ts-ignore
        thisDigit=pad(thisDigit,2).toString();
        thisDigit=parseInt(thisDigit[0]) + parseInt(thisDigit[1]);
        y=y+thisDigit;
    }
    x=x+(10-parseInt(y.toString().slice(-1))).toString().slice(-1);
    return x;
}