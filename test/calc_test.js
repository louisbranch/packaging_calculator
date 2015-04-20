var calc = require("../lib/calc");
var assert = require("assert");

describe("NuPack Calculator", function () {

  describe(".initialCost()", function () {

    describe("when price syntax is correct", function () {

      it("adds a flat markup of 5%", function () {
        assert.equal(calc.initialCost("$1000.00"), 1050);
      });

    });

    describe("when price synxtax is incorrect", function () {

      it("returns not a number", function () {
        assert(isNaN(calc.initialCost("$1000,00")));
      });

    });

  });

});
