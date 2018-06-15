import { random } from "../";
import { testRange, initOptions } from "../helpers";

/**
 *  Return a random bool, either true or false
 *
 *  @param {Object} [options={ likelihood: 50 }] alter the likelihood of
 *    receiving a true or false value back.
 *  @returns {boolean} either true or false
 */
const bool = options => {
  options = initOptions(options, { likelihood: 50 });

  testRange(
    options.likelihood < 0 || options.likelihood > 100,
    "Chance: Likelihood accepts values from 0 to 100."
  );

  return random() * 100 < options.likelihood;
};

export default bool;
