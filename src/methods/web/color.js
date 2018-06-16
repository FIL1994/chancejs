import { floating, natural } from "../basics";
import { pad, initOptions } from "../../helpers";
import { pick, get } from "../utils";

export default options => {
    function gray(value, delimiter) {
        return [value, value, value].join(delimiter || '');
    }

    function rgb(hasAlpha) {
        var rgbValue     = (hasAlpha)    ? 'rgba' : 'rgb';
        var alphaChannel = (hasAlpha)    ? (',' + floating({min:min_alpha, max:max_alpha})) : "";
        var colorValue   = (isGrayscale) ? (gray(natural({min: min_rgb, max: max_rgb}), ',')) : (natural({min: min_green, max: max_green}) + ',' + natural({min: min_blue, max: max_blue}) + ',' + natural({max: 255}));
        return rgbValue + '(' + colorValue + alphaChannel + ')';
    }

    function hex(start, end, withHash) {
        var symbol = (withHash) ? "#" : "";
        var hexstring = "";

        if (isGrayscale) {
            hexstring = gray(pad(hex({min: min_rgb, max: max_rgb}), 2));
            if (options.format === "shorthex") {
                hexstring = gray(hex({min: 0, max: 15}));
            }
        }
        else {
            if (options.format === "shorthex") {
                hexstring = pad(hex({min: Math.floor(min_red / 16), max: Math.floor(max_red / 16)}), 1) + pad(hex({min: Math.floor(min_green / 16), max: Math.floor(max_green / 16)}), 1) + pad(hex({min: Math.floor(min_blue / 16), max: Math.floor(max_blue / 16)}), 1);
            }
            else if (min_red !== undefined || max_red !== undefined || min_green !== undefined || max_green !== undefined || min_blue !== undefined || max_blue !== undefined) {
                hexstring = pad(hex({min: min_red, max: max_red}), 2) + pad(hex({min: min_green, max: max_green}), 2) + pad(hex({min: min_blue, max: max_blue}), 2);
            }
            else {
                hexstring = pad(hex({min: min_rgb, max: max_rgb}), 2) + pad(hex({min: min_rgb, max: max_rgb}), 2) + pad(hex({min: min_rgb, max: max_rgb}), 2);
            }
        }

        return symbol + hexstring;
    }

    options = initOptions(options, {
        format: pick(['hex', 'shorthex', 'rgb', 'rgba', '0x', 'name']),
        grayscale: false,
        casing: 'lower',
        min: 0,
        max: 255,
        min_red: undefined,
        max_red: undefined,
        min_green: undefined,
        max_green: undefined,
        min_blue: undefined,
        max_blue: undefined,
        min_alpha: 0,
        max_alpha: 1
    });

    var isGrayscale = options.grayscale;
    var min_rgb = options.min;
    var max_rgb = options.max;
    var min_red = options.min_red;
    var max_red = options.max_red;
    var min_green = options.min_green;
    var max_green = options.max_green;
    var min_blue = options.min_blue;
    var max_blue = options.max_blue;
    var min_alpha = options.min_alpha;
    var max_alpha = options.max_alpha;
    if (options.min_red === undefined) { min_red = min_rgb; }
    if (options.max_red === undefined) { max_red = max_rgb; }
    if (options.min_green === undefined) { min_green = min_rgb; }
    if (options.max_green === undefined) { max_green = max_rgb; }
    if (options.min_blue === undefined) { min_blue = min_rgb; }
    if (options.max_blue === undefined) { max_blue = max_rgb; }
    if (options.min_alpha === undefined) { min_alpha = 0; }
    if (options.max_alpha === undefined) { max_alpha = 1; }
    if (isGrayscale && min_rgb === 0 && max_rgb === 255 && min_red !== undefined && max_red !== undefined) {
        min_rgb = ((min_red + min_green + min_blue) / 3);
        max_rgb = ((max_red + max_green + max_blue) / 3);
    }
    var colorValue;

    if (options.format === 'hex') {
        colorValue = hex.call(this, 2, 6, true);
    }
    else if (options.format === 'shorthex') {
        colorValue = hex.call(this, 1, 3, true);
    }
    else if (options.format === 'rgb') {
        colorValue = rgb.call(this, false);
    }
    else if (options.format === 'rgba') {
        colorValue = rgb.call(this, true);
    }
    else if (options.format === '0x') {
        colorValue = '0x' + hex.call(this, 2, 6);
    }
    else if(options.format === 'name') {
        return pick(get("colorNames"));
    }
    else {
        throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');
    }

    if (options.casing === 'upper' ) {
        colorValue = colorValue.toUpperCase();
    }

    return colorValue;
}