import { pickone, shuffle } from "./";

const pickset = (arr, count) => {
  if (count === 0) {
    return [];
  }
  if (arr.length === 0) {
    throw new RangeError("Chance: Cannot pickset() from an empty array");
  }
  if (count < 0) {
    throw new RangeError("Chance: Count must be a positive number");
  }
  if (!count || count === 1) {
    return [pickone(arr)];
  } else {
    return shuffle(arr).slice(0, count);
  }
};

export default pickset;
