import { pick } from "../utils";
import { nationalities } from "../person";

export default options => {
    var nationality = pick(nationalities());
    return nationality.name;
}