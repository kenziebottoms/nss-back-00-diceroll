"use strict";

module.exports = (argv) => {
    let count, sides;
    let [,,...args] = argv;
    count = args[1] ? args[0] : 1;
    sides = args[1] || args[0] || 6;
    return { count, sides };
};