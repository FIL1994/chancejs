import { chordQuality, note } from ".";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options);
    return note(options) + chordQuality(options);
}