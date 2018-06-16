import { counties } from "./";
import { pick } from "../utils";


export default options => pick(counties()).name;