import { initOptions } from "../../helpers";

const weekday = (options) => {
    options = initOptions(options, {weekday_only: false});
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    if (!options.weekday_only) {
        weekdays.push("Saturday");
        weekdays.push("Sunday");
    }
    return this.pickone(weekdays);
}