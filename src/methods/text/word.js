import { natural } from "../..";
import syllable from "./syllable";
import { initOptions, testRange, capitalize } from "../../helpers";

const word = (options) => {
    options = initOptions(options);

    testRange(
        options.syllables && options.length,
        "Chance: Cannot specify both syllables AND length."
    );

    var syllables = options.syllables || natural({min: 1, max: 3}),
        text = '';

    if (options.length) {
        // Either bound word by length
        do {
            text += syllable();
        } while (text.length < options.length);
        text = text.substring(0, options.length);
    } else {
        // Or by number of syllables
        for (var i = 0; i < syllables; i++) {
            text += syllable();
        }
    }

    if (options.capitalize) {
        text = capitalize(text);
    }

    return text;
}

export default word;