var parser = require("../lib/parser");
var assert = require("assert");

describe("NuPack Parser", function () {

  describe(".price()", function () {

    describe("when price syntax is valid", function () {

      it("converts number to a float value", function () {
        assert.equal(parser.price("$1000.00"), 1000);
      });

    })

    describe("when price syntax is invalid", function () {

      it("returns not a number", function () {
        assert(isNaN(parser.price("$1000,00")));
      });

    })

  });

  describe(".people()", function () {

    describe("when people syntax is valid", function () {

      it("converts number to a integer value", function () {
        assert.equal(parser.people("3 people"), 3);
      });

    })

    describe("when person is used instead", function () {

      it("converts number to a integer value", function () {
        assert.equal(parser.people("1 person"), 1);
      });

    })

    describe("when people number syntax is invalid", function () {

      it("returns not a number", function () {
        assert(isNaN(parser.people("3.3 people")));
      });

    })

  });

});
