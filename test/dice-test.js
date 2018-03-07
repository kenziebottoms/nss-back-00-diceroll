const { roll, toDiceNotation, parseDiceNotation } = require("../lib/dice");

const { assert } = require("chai");

describe("dice module", () => {
    describe("roll()", () => {
        it("rolling a d20 should return a number between 1 and 20", () => {
            assert.isAtLeast(roll("1d20"), 1);
            assert.isAtMost(roll("1d20"), 20);
        });
        it("rolling three d12's should return a number between 3 and 36", () => {
            assert.isAtLeast(roll("3d12"), 3);
            assert.isAtMost(roll("3d12"), 36);
        });
    });
    describe("toDiceNotation()", () => {
        let obj = { count: 3, sides: 12 };
        it("should return a string", () => {
            assert.isString(toDiceNotation(obj));
        });
        it("above obj should return '3d12'", () => {
            assert.equal(toDiceNotation(obj), "3d12");
        });
    });
    describe("parseDiceNotation", () => {
        let obj = { count: 3, sides: 12 };
        it("'3d12' should parse to 3, 12", () => {
            assert.deepEqual(parseDiceNotation("3d12"), obj);
        });
    });
});