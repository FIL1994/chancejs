import { initOptions, testRange } from "../helpers";
import { MAX_INT } from "../constants";
import { integer } from ".";

/**
 *  Return a random floating point number
 *
 *  @param {Object} [options={}] can specify a fixed precision, min, max
 *  @returns {number} a single floating point number
 *  @throws {RangeError} Can only specify fixed or precision, not both. Also
 *    min cannot be greater than max
 */
const floating = options => {
  options = initOptions(options, { fixed: 4 });
  testRange(
    options.fixed && options.precision,
    "Chance: Cannot specify both fixed and precision."
  );

  var num;
  var fixed = Math.pow(10, options.fixed);

  var max = MAX_INT / fixed;
  var min = -max;

  testRange(
    options.min && options.fixed && options.min < min,
    "Chance: Min specified is out of range with fixed. Min should be, at least, " +
      min
  );
  testRange(
    options.max && options.fixed && options.max > max,
    "Chance: Max specified is out of range with fixed. Max should be, at most, " +
      max
  );

  options = initOptions(options, { min: min, max: max });

  // Todo - Make this work!
  // options.precision = (typeof options.precision !== "undefined") ? options.precision : false;

  num = integer({ min: options.min * fixed, max: options.max * fixed });
  var num_fixed = (num / fixed).toFixed(options.fixed);

  return parseFloat(num_fixed);
};

export default floating;
