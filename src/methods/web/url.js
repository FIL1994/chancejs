import { initOptions } from "../../helpers";
import { domain } from "../";
import { word } from "../text";
import { pick } from "../utils";

export default options => {
    options = initOptions(options, { protocol: "http", domain: domain(options), domain_prefix: "", path: word(), extensions: []});

    var extension = options.extensions.length > 0 ? "." + pick(options.extensions) : "";
    var domain = options.domain_prefix ? options.domain_prefix + "." + options.domain : options.domain;

    return options.protocol + "://" + domain + "/" + options.path + extension;
}