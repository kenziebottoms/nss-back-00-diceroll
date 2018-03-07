"use strict";

const { randomInt } = require("./math");

module.exports = {
    roll: (desc) => {
        // parse string
        let { count, sides } = module.exports.parseDiceNotation(desc);
        // create list of throw results
        let rolls = [];
        for (let i=0; i<count; i++) {
            rolls.push(randomInt(1, sides));
        }
        // sum of list
        return rolls.reduce((a, b) => a+b);
    },
    toDiceNotation: (obj) => {
        return `${obj.count}d${obj.sides}`;
    },
    parseDiceNotation: (str) => {
        let [count, sides] = str.split("d").map(x => parseInt(x));
        return { count, sides };
    }
}