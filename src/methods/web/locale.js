import { initOptions } from "../../helpers";
import { get, pick } from "../utils";

export default options => {
    options = initOptions(options);
    if (options.region){
      return pick(get("locale_regions"));
    } else {
      return pick(get("locale_languages"));
    }
}