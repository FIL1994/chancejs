import { string, integer, natural } from "../basics";
import { pad } from "../../helpers";

export default () => {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var alphanum = alpha + '0123456789';
    var iban =
        string({ length: 2, pool: alpha }) +
        pad(integer({ min: 0, max: 99 }), 2) +
        string({ length: 4, pool: alphanum }) +
        pad(natural(), natural({ min: 6, max: 26 }));
    return iban;
}