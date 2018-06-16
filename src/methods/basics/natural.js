import { MAX_INT } from "../../constants";
import { testRange, initOptions } from "../../helpers";
import { integer } from "./";

const natural = options => {
  options = initOptions(options, { min: 0, max: MAX_INT });
  if (typeof options.numerals === "number") {
    testRange(
      options.numerals < 1,
      "Chance: Numerals cannot be less than one."
    );
    options.min = Math.pow(10, options.numerals - 1);
    options.max = Math.pow(10, options.numerals) - 1;
  }
  testRange(options.min < 0, "Chance: Min cannot be less than zero.");
  return integer(options);
};

export default natural;
