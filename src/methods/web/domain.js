import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options);
    return this.word() + '.' + (options.tld || this.tld());
}