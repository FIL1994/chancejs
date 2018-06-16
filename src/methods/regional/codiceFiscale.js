import { pickone } from "../utils";
import { pad } from "../../helpers";
import { natural } from "../basics";

export default options => {
    options = options || {};
    var gender = !!options.gender ? options.gender : gender(),
        first = !!options.first ? options.first : first( { gender: gender, nationality: 'it'} ),
        last = !!options.last ? options.last : last( { nationality: 'it'} ),
        birthday = !!options.birthday ? options.birthday : birthday(),
        city = !!options.city ? options.city : pickone(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'Z']) + pad(natural({max:999}), 3),
        cf = [],
        name_generator = function(name, isLast) {
            var temp,
                return_value = [];

            if (name.length < 3) {
                return_value = name.split("").concat("XXX".split("")).splice(0,3);
            }
            else {
                temp = name.toUpperCase().split('').map(function(c){
                    return ("BCDFGHJKLMNPRSTVWZ".indexOf(c) !== -1) ? c : undefined;
                }).join('');
                if (temp.length > 3) {
                    if (isLast) {
                        temp = temp.substr(0,3);
                    } else {
                        temp = temp[0] + temp.substr(2,2);
                    }
                }
                if (temp.length < 3) {
                    return_value = temp;
                    temp = name.toUpperCase().split('').map(function(c){
                        return ("AEIOU".indexOf(c) !== -1) ? c : undefined;
                    }).join('').substr(0, 3 - return_value.length);
                }
                return_value = return_value + temp;
            }

            return return_value;
        },
        date_generator = function(birthday, gender, that) {
            var lettermonths = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];

            return  birthday.getFullYear().toString().substr(2) +
                    lettermonths[birthday.getMonth()] +
                    that.pad(birthday.getDate() + ((gender.toLowerCase() === "female") ? 40 : 0), 2);
        },
        checkdigit_generator = function(cf, args) {
            var range1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                range2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",
                evens  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                odds   = "BAKPLCQDREVOSFTGUHMINJWZYX",
                digit  = 0;


            for(var i = 0; i < 15; i++) {
                if (i % 2 !== 0) {
                    digit += evens.indexOf(range2[range1.indexOf(cf[i])]);
                }
                else {
                    digit +=  odds.indexOf(range2[range1.indexOf(cf[i])]);
                }
            }
            return evens[digit % 26];
        };
        
    // @ts-ignore
    cf = cf.concat(name_generator(last, true), name_generator(first), date_generator(birthday, gender, this), city.toUpperCase().split("")).join("");
    // @ts-ignore
    cf += checkdigit_generator(cf.toUpperCase(), this);

    // @ts-ignore
    return cf.toUpperCase();    
}