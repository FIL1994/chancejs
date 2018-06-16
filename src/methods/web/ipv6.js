import { n } from "../utils";
import { hash } from "../hash";

export default () => {
    var ip_addr = n(hash, 8, {length: 4});

    return ip_addr.join(":");   
}