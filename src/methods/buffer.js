import { initOptions, testRange } from "../helpers";
import { natural, n, character } from "./";

/**
 *  Return a random buffer
 *
 *  @param {Object} [options={}] can specify a length
 *  @returns {any} a buffer of random length
 *  @throws {RangeError} length cannot be less than zero
 */
const buffer = options => {
  //@ts-ignore
  if (typeof Buffer === "undefined") {
    // @ts-ignore
    throw new UnsupportedError(
      "Sorry, the buffer() function is not supported on your platform"
    );
  }
  options = initOptions(options, { length: natural({ min: 5, max: 20 }) });
  testRange(options.length < 0, "Chance: Length cannot be less than zero.");
  var length = options.length;
  var content = n(character, length, options);

  // @ts-ignore
  return Buffer.from(content);
};

export default buffer;
