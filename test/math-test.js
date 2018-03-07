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
        it("should not be less than the lower bound", () => {
            assert.isAtLeast(randomInt(1,6), 1);
        });
        it("should not exceed the upper bound", () => {
            assert.isAtMost(randomInt(1,6), 6);
        });
    });
});