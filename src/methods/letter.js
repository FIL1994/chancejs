import { initOptions } from "../helpers";
import { character } from "./";

/**
 * @returns {string}
 */
const letter = options => {
  options = initOptions(options, { casing: "lower" });
  var pool = "abcdefghijklmnopqrstuvwxyz";
  var letter = character({ pool: pool });
  if (options.casing === "upper") {
    letter = letter.toUpperCase();
  }
  return letter;
};

export default letter;
