import { n as nFn } from "../utils";
import { natural } from "../..";
import { initOptions } from "../../helpers";

export default (options) => {
    options = initOptions(options, {
        formatted: true
    });

    var n = nFn(natural, 9, { max: 9 });
    var d1 = n[8]*2+n[7]*3+n[6]*4+n[5]*5+n[4]*6+n[3]*7+n[2]*8+n[1]*9+n[0]*10;
    d1 = 11 - (d1 % 11);
    if (d1>=10) {
        d1 = 0;
    }
    var d2 = d1*2+n[8]*3+n[7]*4+n[6]*5+n[5]*6+n[4]*7+n[3]*8+n[2]*9+n[1]*10+n[0]*11;
    d2 = 11 - (d2 % 11);
    if (d2>=10) {
        d2 = 0;
    }
    var cpf = ''+n[0]+n[1]+n[2]+'.'+n[3]+n[4]+n[5]+'.'+n[6]+n[7]+n[8]+'-'+d1+d2;
    return options.formatted ? cpf : cpf.replace(/\D/g,'');
}
