import { natural } from "../basics";
import { pad } from "../../helpers";
import { provinces } from "../location";
import { pick } from "../utils";
import { luhnCalculate } from "../hash";

export default () => {
    var it_vat = natural({min: 1, max: 1800000});

    const it_vat_new = pad(it_vat, 7) + pad(pick(provinces({ country: 'it' })).code, 3);
    return it_vat_new + luhnCalculate(it_vat_new);
}