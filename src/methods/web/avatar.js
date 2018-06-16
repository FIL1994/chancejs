import { initOptions } from "../../helpers";
import { email } from "./";

export default options => {
    var url = null;
    var URL_BASE = '//www.gravatar.com/avatar/';
    var PROTOCOLS = {
        http: 'http',
        https: 'https'
    };
    var FILE_TYPES = {
        bmp: 'bmp',
        gif: 'gif',
        jpg: 'jpg',
        png: 'png'
    };
    var FALLBACKS = {
        '404': '404', // Return 404 if not found
        mm: 'mm', // Mystery man
        identicon: 'identicon', // Geometric pattern based on hash
        monsterid: 'monsterid', // A generated monster icon
        wavatar: 'wavatar', // A generated face
        retro: 'retro', // 8-bit icon
        blank: 'blank' // A transparent png
    };
    var RATINGS = {
        g: 'g',
        pg: 'pg',
        r: 'r',
        x: 'x'
    };
    var opts = {
        protocol: null,
        email: null,
        fileExtension: null,
        size: null,
        fallback: null,
        rating: null
    };

    if (!options) {
        // Set to a random email
        opts.email = email();
        options = {};
    }
    else if (typeof options === 'string') {
        opts.email = options;
        options = {};
    }
    else if (typeof options !== 'object') {
        return null;
    }
    else if (options.constructor === 'Array') {
        return null;
    }

    opts = initOptions(options, opts);

    if (!opts.email) {
        // Set to a random email
        opts.email = email();
    }

    // Safe checking for params
    opts.protocol = PROTOCOLS[opts.protocol] ? opts.protocol + ':' : '';
    opts.size = parseInt(opts.size, 0) ? opts.size : '';
    opts.rating = RATINGS[opts.rating] ? opts.rating : '';
    opts.fallback = FALLBACKS[opts.fallback] ? opts.fallback : '';
    opts.fileExtension = FILE_TYPES[opts.fileExtension] ? opts.fileExtension : '';

    url =
        opts.protocol +
        URL_BASE +
        bimd5.md5(opts.email) +
        (opts.fileExtension ? '.' + opts.fileExtension : '') +
        (opts.size || opts.rating || opts.fallback ? '?' : '') +
        (opts.size ? '&s=' + opts.size.toString() : '') +
        (opts.rating ? '&r=' + opts.rating : '') +
        (opts.fallback ? '&d=' + opts.fallback : '');

    return url;
}