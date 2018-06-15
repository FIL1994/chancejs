import { initOptions, testRange } from "../helpers";
import { CHARS_LOWER, CHARS_UPPER, NUMBERS } from "../constants";
import { natural } from "./";

/**
 *  Return a random character.
 *
 *  @param {Object} [options={}] can specify a character pool, only alpha,
 *    only symbols, and casing (lower or upper)
 *  @returns {String} a single random character
 *  @throws {RangeError} Can only specify alpha or symbols, not both
 */
const character = options => {
  options = initOptions(options);
  testRange(
    options.alpha && options.symbols,
    "Chance: Cannot specify both alpha and symbols."
  );

  var symbols = "!@#$%^&*()[]",
    letters,
    pool;

  if (options.casing === "lower") {
    letters = CHARS_LOWER;
  } else if (options.casing === "upper") {
    letters = CHARS_UPPER;
  } else {
    letters = CHARS_LOWER + CHARS_UPPER;
  }

  if (options.pool) {
    pool = options.pool;
  } else if (options.alpha) {
    pool = letters;
  } else if (options.symbols) {
    pool = symbols;
  } else {
    pool = letters + NUMBERS + symbols;
  }

  return pool.charAt(natural({ max: pool.length - 1 }));
};

export default character;
