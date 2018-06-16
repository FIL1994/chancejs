import { get } from "../utils";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options, { country: 'us', us_states_and_dc: true } );

    var states;

    switch (options.country.toLowerCase()) {
        case 'us':
            var us_states_and_dc = get("us_states_and_dc"),
                territories = get("territories"),
                armed_forces = get("armed_forces");

            states = [];

            if (options.us_states_and_dc) {
                states = states.concat(us_states_and_dc);
            }
            if (options.territories) {
                states = states.concat(territories);
            }
            if (options.armed_forces) {
                states = states.concat(armed_forces);
            }
            break;
        case 'it':
            states = get("country_regions")[options.country.toLowerCase()];
            break;
        case 'uk':
            states = get("counties")[options.country.toLowerCase()];
            break;
    }

    return states;
}