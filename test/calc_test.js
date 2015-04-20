var calc = require("../lib/calc");
var assert = require("assert");

describe("NuPack Calculator", function () {

  describe(".initialCost()", function () {

    it("adds a flat markup of 5%", function () {
      assert.equal(calc.initialCost(1000), 1050);
    });

  });

  describe(".peopleCost()", function () {

    it("adds 1.2% for each person", function () {
      assert.equal(1024, calc.peopleCost(1000, 2));
    });

  });

  describe(".productCost()", function () {

    it("adds 7.5% for drugs", function () {
      assert.equal(1075, calc.productCost(1000, "drugs"));
    });

    it("adds 13% for food", function () {
      assert.equal(1130, calc.productCost(1000, "food"));
    });

    it("adds 2% for electronics", function () {
      assert.equal(1020, calc.productCost(1000, "electronics"));
    });

    it("remains the same for everything else", function () {
      assert.equal(1000, calc.productCost(1000, "books"));
    });

  });

});
