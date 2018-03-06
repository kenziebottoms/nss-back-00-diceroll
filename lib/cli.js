"use strict";

const { argv } = process;

const { randomInt } = require("./math");
const parseArgs = require("./parse-args");

let args = parseArgs(argv);
if (args) {
    console.log(args);
}