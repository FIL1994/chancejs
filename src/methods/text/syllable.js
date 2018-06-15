import { initOptions, capitalize } from "../../helpers";
import { natural, character } from "../..";

const syllable = options => {
  options = initOptions(options);

  var length = options.length || natural({ min: 2, max: 3 }),
    consonants = "bcdfghjklmnprstvwz", // consonants except hard to speak ones
    vowels = "aeiou", // vowels
    all = consonants + vowels, // all
    text = "",
    chr;

  // I'm sure there's a more elegant way to do this, but this works
  // decently well.
  for (var i = 0; i < length; i++) {
    if (i === 0) {
      // First character can be anything
      chr = character({ pool: all });
    } else if (consonants.indexOf(chr) === -1) {
      // Last character was a vowel, now we want a consonant
      chr = character({ pool: consonants });
    } else {
      // Last character was a consonant, now we want a vowel
      chr = character({ pool: vowels });
    }

    text += chr;
  }

  if (options.capitalize) {
    text = capitalize(text);
  }

  return text;
};

export default syllable;
