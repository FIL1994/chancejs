import { natural, shuffle } from "./";

const pick = (arr, count) => {
  if (arr.length === 0) {
    throw new RangeError("Chance: Cannot pick() from an empty array");
  }
  if (!count || count === 1) {
    return arr[natural({ max: arr.length - 1 })];
  } else {
    return shuffle(arr).slice(0, count);
  }
};

export default pick;
