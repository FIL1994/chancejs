import { itVat } from "../regional"; 
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options, { country: 'it' });
    switch (options.country.toLowerCase()) {
        case 'it':
            return itVat();
    }    
}
