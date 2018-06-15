import { initOptions, testRange } from "../helpers";
import { natural, character, n } from "./";

/**
 *  Return a random string
 *
 *  @param {Object} [options={}] can specify a length
 *  @returns {string} a string of random length
 *  @throws {RangeError} length cannot be less than zero
 */
const string = options => {
  options = initOptions(options, { length: natural({ min: 5, max: 20 }) });
  testRange(options.length < 0, "Chance: Length cannot be less than zero.");
  var length = options.length,
    text = n(character, length, options);

  return text.join("");
};

export default string;
