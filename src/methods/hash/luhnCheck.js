import { luhnCalculate } from "./";

export default num => {
    var str = num.toString();
    var checkDigit = +str.substring(str.length - 1);
    return checkDigit === luhnCalculate(+str.substring(0, str.length - 1));
}

