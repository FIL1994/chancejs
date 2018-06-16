import { normal } from "../misc";

export default options => {
    var performanceCounter = 0;
    do {
        var idx = Math.round(normal({ mean: options.mean, dev: options.dev }));
        if (idx < options.pool.length && idx >= 0) {
            return options.pool[idx];
        } else {
            performanceCounter++;
        }
    } while(performanceCounter < 100);

    throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.");
}