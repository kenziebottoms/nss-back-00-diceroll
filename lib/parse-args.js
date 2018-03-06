"use strict";

module.exports = (argv) => {
    let count, sides;
    let [,,...args] = argv;
    if (args.length == 0) {
        count = 1;
        sides = 6;
    } else if (args.length == 1) {
        count = 1;
        sides = parseInt(args[0]);
    } else if (args.length == 2) {
        count = parseInt(args[0]);
        sides = parseInt(args[1]);
    }
    if (count != count || sides != sides) {
        console.log("Numbers, dude.");
        return false;
    } else {
        return { count, sides };
    }
};