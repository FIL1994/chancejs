import { natural } from "../basics";

const pickone = arr => {
  if (arr.length === 0) {
    throw new RangeError("Chance: Cannot pickone() from an empty array");
  }
  return arr[natural({ max: arr.length - 1 })];
};

export default pickone;