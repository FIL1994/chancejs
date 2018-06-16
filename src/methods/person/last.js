import { initOptions } from "../../helpers";
import { get, pick } from "../utils";

export default (options) => {
    options = initOptions(options, {nationality: '*'});
    if (options.nationality === "*") {
      var allLastNames = []
      var lastNames = get("lastNames")
      Object.keys(lastNames).forEach(function(key, i){
        allLastNames = allLastNames.concat(lastNames[key])
      })
      return pick(allLastNames)
    }
    else {
      return pick(get("lastNames")[options.nationality.toLowerCase()]);
    }
}