import { capitalize } from "../../helpers";
import { word } from "../text";

export default () => capitalize(word({syllables: 3}));