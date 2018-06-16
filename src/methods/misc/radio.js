import { initOptions } from "../../helpers";
import { character } from "../basics";

export default options => {
        // Initial Letter (Typically Designated by Side of Mississippi River)
        options = initOptions(options, {side : "?"});
        var fl = "";
        switch (options.side.toLowerCase()) {
        case "east":
        case "e":
            fl = "W";
            break;
        case "west":
        case "w":
            fl = "K";
            break;
        default:
            fl = character({pool: "KW"});
            break;
        }

        return fl + character({alpha: true, casing: "upper"}) +
                character({alpha: true, casing: "upper"}) +
                character({alpha: true, casing: "upper"});    
}