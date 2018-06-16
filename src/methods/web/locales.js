import { get } from "../utils";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options);
    if (options.region){
      return get("locale_regions");
    } else {
      return get("locale_languages");
    }
}