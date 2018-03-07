const { randomInt } = require("../lib/math");
const { assert } = require("chai");

describe("math module", () => {
    describe("randomInt()", () => {
        it("randomInt should be a function", () => {
            assert.isFunction(randomInt);
        });
        it("should return a number", () => {
            assert.isNumber(randomInt(1,6));
        });
    });
});