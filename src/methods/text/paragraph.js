import { initOptions } from "../../helpers";
import { natural, sentence } from "../..";
import { n } from "..";

const paragraph = options => {
  options = initOptions(options);

  var sentences = options.sentences || natural({ min: 3, max: 7 }),
    sentence_array = n(sentence, sentences);

  return sentence_array.join(" ");
};
