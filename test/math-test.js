const { randomInt } = require("../lib/math");
const { assert: {isFunction} } = require("chai");

describe("math module", () => {
    describe("randomInt()", () => {
        it("randomInt should be a function", () => {
            isFunction(randomInt);
        });
    });
});