const parseArgs = require("../lib/parse-args");
const { assert } = require("chai");

describe("parse args module", () => {
    describe("parseArgs()", () => {
        let args0 = [false, false];
        let args1 = [false, false, 20];
        let args2 = [false, false, 4, 20];
        it("should have count and sides properties", () => {
            assert.property(parseArgs(args0), "sides");
            assert.property(parseArgs(args0), "count");
            assert.property(parseArgs(args1), "sides");
            assert.property(parseArgs(args1), "count");
            assert.property(parseArgs(args2), "sides");
            assert.property(parseArgs(args2), "count");
        });
        it("no args should return 1d6", () => {
            assert.equal(parseArgs(args0).sides, 6);
            assert.equal(parseArgs(args0).count, 1);
        });
        it("1 arg should return 1d#", () => {
            assert.equal(parseArgs(args1).sides, 20);
            assert.equal(parseArgs(args1).count, 1);
        });
        it("2 args should return #d#", () => {
            assert.equal(parseArgs(args2).sides, 20);
            assert.equal(parseArgs(args2).count, 4);
        });
    });
});