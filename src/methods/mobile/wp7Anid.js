import { integer } from "../basics";
import { guid, hash } from "../hash";

export default () => {
    return 'A=' + guid().replace(/-/g, '').toUpperCase() + '&E=' + hash({ length:3 }) + '&W=' + integer({ min:0, max:9 });
}