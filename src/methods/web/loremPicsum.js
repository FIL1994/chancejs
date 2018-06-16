import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options, { width: 500, height: 500, greyscale: false, blurred: false });

    var greyscale = options.greyscale ? 'g/' : '';
    var query = options.blurred ? '/?blur' : '/?random';

    return 'https://picsum.photos/' + greyscale + options.width + '/' + options.height + query;    
}