import { initOptions } from "../../helpers";
import { natural } from "../../";

export default (options) => {
    options = initOptions(options);
    var ageRange;

    switch (options.type) {
        case 'child':
            ageRange = {min: 0, max: 12};
            break;
        case 'teen':
            ageRange = {min: 13, max: 19};
            break;
        case 'adult':
            ageRange = {min: 18, max: 65};
            break;
        case 'senior':
            ageRange = {min: 65, max: 100};
            break;
        case 'all':
            ageRange = {min: 0, max: 100};
            break;
        default:
            ageRange = {min: 18, max: 65};
            break;
    }

    return natural(ageRange);
}