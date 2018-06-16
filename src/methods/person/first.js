import { initOptions } from "../../helpers";
import { pick, get } from "../utils";
import { gender } from "./";

export default (options) => {
    options = initOptions(options, {gender: gender(), nationality: 'en'});
    return pick(get("firstNames")[options.gender.toLowerCase()][options.nationality.toLowerCase()]);
}