import { range } from "../helpers";
import { natural } from "./";

const shuffle = arr => {
  var new_array = [],
    j = 0,
    length = Number(arr.length),
    source_indexes = range(length),
    last_source_index = length - 1,
    selected_source_index;

  for (var i = 0; i < length; i++) {
    // Pick a random index from the array
    selected_source_index = natural({ max: last_source_index });
    j = source_indexes[selected_source_index];

    // Add it to the new array
    new_array[i] = arr[j];

    // Mark the source index as used
    source_indexes[selected_source_index] = source_indexes[last_source_index];
    last_source_index -= 1;
  }

  return new_array;
};

export default shuffle;
