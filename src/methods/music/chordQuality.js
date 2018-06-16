import { pickone } from "../utils";
import { initOptions } from "../../helpers";

export default options => {
    options = initOptions(options, { jazz: true });
    var chordQualities = ['maj', 'min', 'aug', 'dim'];
    if (options.jazz){
      chordQualities = [
        'maj7',
        'min7',
        '7',
        'sus',
        'dim',
        'ø'
      ];
    }
    return pickone(chordQualities);
}