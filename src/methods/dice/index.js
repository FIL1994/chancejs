import { initOptions } from "../../helpers";
import { natural } from "../basics";

function diceFn (range) {
    return function () {
        return natural(range);
    };
}

const d4 = diceFn({min: 1, max: 4});
const d6 = diceFn({min: 1, max: 6});
const d8 = diceFn({min: 1, max: 8});
const d10 = diceFn({min: 1, max: 10});
const d12 = diceFn({min: 1, max: 12});
const d20 = diceFn({min: 1, max: 20});
const d30 = diceFn({min: 1, max: 30});
const d100 = diceFn({min: 1, max: 100});

const rpg = function (thrown, options) {
    options = initOptions(options);
    if (!thrown) {
        throw new RangeError("Chance: A type of die roll must be included");
    } else {
        var bits = thrown.toLowerCase().split("d"),
            rolls = [];

        if (bits.length !== 2 || !parseInt(bits[0], 10) || !parseInt(bits[1], 10)) {
            throw new Error("Chance: Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
        }
        for (var i = bits[0]; i > 0; i--) {
            rolls[i - 1] = natural({min: 1, max: bits[1]});
        }
        return (typeof options.sum !== 'undefined' && options.sum) ? rolls.reduce(function (p, c) { return p + c; }) : rolls;
    }
};

export { d4, d6, d8, d10, d12, d20, d30, d100, rpg, diceFn }