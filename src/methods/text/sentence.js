import { initOptions, capitalize } from "../../helpers";
import { natural } from "../..";
import { n } from "..";

const sentence = options => {
  options = initOptions(options);

  var words = options.words || natural({ min: 12, max: 18 }),
    punctuation = options.punctuation,
    text,
    word_array = n(word, words);

  text = word_array.join(" ");

  // Capitalize first letter of sentence
  text = capitalize(text);

  // Make sure punctuation has a usable value
  if (punctuation !== false && !/^[\.\?;!:]$/.test(punctuation)) {
    punctuation = ".";
  }

  // Add punctuation mark
  if (punctuation) {
    text += punctuation;
  }

  return text;
};

export default sentence;
