import {initOptions, testRange} from "../../helpers";
import { random } from "../../";

export default options => {
    options = initOptions(options, {mean : 0, dev : 1, pool : []});

    testRange(
        options.pool.constructor !== Array,
        "Chance: The pool option must be a valid array."
    );
    testRange(
        typeof options.mean !== 'number',
        "Chance: Mean (mean) must be a number"
    );
    testRange(
        typeof options.dev !== 'number',
        "Chance: Standard deviation (dev) must be a number"
    );

    // If a pool has been passed, then we are returning an item from that pool,
    // using the normal distribution settings that were passed in
    if (options.pool.length > 0) {
        return normalPool(options);
    }

    // The Marsaglia Polar method
    var s, u, v, norm,
        mean = options.mean,
        dev = options.dev;

    do {
        // U and V are from the uniform distribution on (-1, 1)
        u = random() * 2 - 1;
        v = random() * 2 - 1;

        s = u * u + v * v;
    } while (s >= 1);

    // Compute the standard normal variate
    norm = u * Math.sqrt(-2 * Math.log(s) / s);

    // Shape and scale
    return dev * norm + mean;    
}