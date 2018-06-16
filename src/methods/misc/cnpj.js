import { n as nFn } from "../utils";
import { natural } from "../basics";

export default () => {
    var n = nFn(natural, 8, { max: 9 });
    var d1 = 2+n[7]*6+n[6]*7+n[5]*8+n[4]*9+n[3]*2+n[2]*3+n[1]*4+n[0]*5;
    d1 = 11 - (d1 % 11);
    if (d1>=10){
        d1 = 0;
    }
    var d2 = d1*2+3+n[7]*7+n[6]*8+n[5]*9+n[4]*2+n[3]*3+n[2]*4+n[1]*5+n[0]*6;
    d2 = 11 - (d2 % 11);
    if (d2>=10){
        d2 = 0;
    }
    return ''+n[0]+n[1]+'.'+n[2]+n[3]+n[4]+'.'+n[5]+n[6]+n[7]+'/0001-'+d1+d2;
}