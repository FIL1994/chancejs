import { initOptions, capitalize } from "../../helpers";
import { word } from "../text";
import { streetSuffix } from "./";

export default options => {
    options = initOptions(options, { country: 'us', syllables: 2 });
    var     street;

    switch (options.country.toLowerCase()) {
        case 'us':
            street = word({ syllables: options.syllables });
            street = capitalize(street);
            street += ' ';
            street += options.short_suffix ?
                streetSuffix(options).abbreviation :
                streetSuffix(options).name;
            break;
        case 'it':
            street = word({ syllables: options.syllables });
            street = capitalize(street);
            street = (options.short_suffix ?
                streetSuffix(options).abbreviation :
                streetSuffix(options).name) + " " + street;
            break;
    }
    return street;
}