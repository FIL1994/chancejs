import { n } from "../utils";
import { natural } from "../basics";

/**
 * @typedef {Object} ZipOptions
 * @prop {boolean} plusfour used if full zipcode with last 4 is desired
 */

/**
 * @param {ZipOptions=} options options object to pass into function
 * @returns {number}
 */
export default options => {
  let zip = n(natural, 5, { max: 5 });

  if (options && options.plusfour === true) {
    zip.push("-");
    zip = zip.concat(n(natural, 4, { max: 4 }));
  }

  return zip.join("");
};
