import { pad } from "../../helpers";
import { natural } from "../basics";

export default () => {
    var account = pad(natural({max: 999999}), 6);
    var property = pad(natural({max: 99}), 2);

    return 'UA-' + account + '-' + property;
}