'use strict';

export default class Utils {
    static sanitizeUrl(url) {
        if (!/^[a-zA-Z-_]+:/.test(url)) {
            url = 'http://' + url;
        }
        return url.toLowerCase();
    }
}