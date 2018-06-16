import { initOptions, testRange } from "../../helpers";
import { MAX_INT, MIN_INT } from "../../constants";
import { random } from "../../";

const integer = options => {
  options = initOptions(options, { min: MIN_INT, max: MAX_INT });
  testRange(
    options.min > options.max,
    "Chance: Min cannot be greater than Max."
  );

  return Math.floor(random() * (options.max - options.min + 1) + options.min);
};

export default integer;
