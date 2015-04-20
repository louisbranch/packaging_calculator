var calc = require("../lib/calc");
var assert = require("assert");

describe("NuPack Calculator", function () {

  describe(".initialCost()", function () {

    it("adds a flat markup of 5%", function () {
      assert.equal(calc.initialCost(1000.00), 1050);
    });

  });

});
