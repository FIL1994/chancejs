import { initOptions, pad } from "../../helpers";
import { first, last, birthday, gender } from "./";
import { integer } from "../..";

export default (options) => {
    var checkDigit = function (input) {
        var alpha = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(''),
            multipliers = [ 7, 3, 1 ],
            runningTotal = 0;

        if (typeof input !== 'string') {
            input = input.toString();
        }

        input.split('').forEach(function(character, idx) {
            var pos = alpha.indexOf(character);

            if(pos !== -1) {
                character = pos === 0 ? 0 : pos + 9;
            } else {
                character = parseInt(character, 10);
            }
            character *= multipliers[idx % multipliers.length];
            runningTotal += character;
        });
        return runningTotal % 10;
    };
    var generate = function (opts) {
        var pad = function (length) {
            return new Array(length + 1).join('<');
        };
        var number = [ 'P<',
                       opts.issuer,
                       opts.last.toUpperCase(),
                       '<<',
                       opts.first.toUpperCase(),
                       pad(39 - (opts.last.length + opts.first.length + 2)),
                       opts.passportNumber,
                       checkDigit(opts.passportNumber),
                       opts.nationality,
                       opts.dob,
                       checkDigit(opts.dob),
                       opts.gender,
                       opts.expiry,
                       checkDigit(opts.expiry),
                       pad(14),
                       checkDigit(pad(14)) ].join('');

        return number +
            (checkDigit(number.substr(44, 10) +
                        number.substr(57, 7) +
                        number.substr(65, 7)));
    };

    options = initOptions(options, {
        first: first(),
        last: last(),
        passportNumber: integer({min: 100000000, max: 999999999}),
        dob: (function () {
            var date = birthday({type: 'adult'});
            // @ts-ignore
            return [date.getFullYear().toString().substr(2),
                    // @ts-ignore
                    pad(date.getMonth() + 1, 2),
                    // @ts-ignore
                    pad(date.getDate(), 2)].join('');
        }()),
        expiry: (function () {
            var date = new Date();
            return [(date.getFullYear() + 5).toString().substr(2),
                    pad(date.getMonth() + 1, 2),
                    pad(date.getDate(), 2)].join('');
        }()),
        gender: gender() === 'Female' ? 'F': 'M',
        issuer: 'GBR',
        nationality: 'GBR'
    });
    return generate(options);    
}