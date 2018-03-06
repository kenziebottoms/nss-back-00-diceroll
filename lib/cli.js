"use strict";

const { argv } = process;

const { randomInt } = require("./math");
const { roll, toDiceNotation } = require("./dice");
const parseArgs = require("./parse-args");

let args = parseArgs(argv);

if (args) {
    console.log(roll(toDiceNotation(args)));
} else {
    console.log("Numbers, dude.");
}