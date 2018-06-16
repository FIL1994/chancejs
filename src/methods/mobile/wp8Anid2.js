import { base64 } from "../../helpers";
import { hash } from "../hash";

export default () => base64( hash( { length : 32 } ) );
