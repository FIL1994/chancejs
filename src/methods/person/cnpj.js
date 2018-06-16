import { n as nFn } from "../utils";
import { natural } from "../..";
import { initOptions } from "../../helpers";

export default (options) => {
    options = initOptions(options, {
        formatted: true
    });

    var n = nFn(natural, 12, { max: 12 });
    var d1 = n[11]*2+n[10]*3+n[9]*4+n[8]*5+n[7]*6+n[6]*7+n[5]*8+n[4]*9+n[3]*2+n[2]*3+n[1]*4+n[0]*5;
    d1 = 11 - (d1 % 11);
    if (d1<2) {
        d1 = 0;
    }
    var d2 = d1*2+n[11]*3+n[10]*4+n[9]*5+n[8]*6+n[7]*7+n[6]*8+n[5]*9+n[4]*2+n[3]*3+n[2]*4+n[1]*5+n[0]*6;
    d2 = 11 - (d2 % 11);
    if (d2<2) {
        d2 = 0;
    }
    var cnpj = ''+n[0]+n[1]+'.'+n[2]+n[3]+n[4]+'.'+n[5]+n[6]+n[7]+'/'+n[8]+n[9]+n[10]+n[11]+'-'+d1+d2;
    return options.formatted ? cnpj : cnpj.replace(/\D/g,'');    
}