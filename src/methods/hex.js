import { initOptions, testRange } from "../helpers";
import { MAX_INT } from "../constants";
import { natural } from "./";

/**
 *  Return a random hex number as string
 *
 *  NOTE the max and min are INCLUDED in the range. So:
 *  chance.hex({min: '9', max: 'B'});
 *  would return either '9', 'A' or 'B'.
 *
 *  @param {Object} [options={}] can specify a min and/or max and/or casing
 *  @returns {String} a single random string hex number
 *  @throws {RangeError} min cannot be greater than max
 */
const hex = options => {
  options = initOptions(options, { min: 0, max: MAX_INT, casing: "lower" });
  testRange(options.min < 0, "Chance: Min cannot be less than zero.");
  var integer = natural({ min: options.min, max: options.max });
  if (options.casing === "upper") {
    return integer.toString(16).toUpperCase();
  }
  return integer.toString(16);
};

export default hex;
