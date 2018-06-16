import {pick, get} from "../utils";
import { initOptions } from "../../helpers";

export default (options) => {
    options = initOptions(options);
    if(options.rank){
        return pick(['Apprentice ', 'Junior ', 'Senior ', 'Lead ']) + pick(get("profession"));
    } else{
        return pick(get("profession"));
    }
}