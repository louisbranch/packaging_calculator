var NuPack = require("../nupack");
var assert = require("assert");

describe("NuPack App", function () {

  var nupack;

  beforeEach(function () {
    nupack = new NuPack();
    nupack.setPrice("$1000.00");
  });

  it("adds a flat markup of 5%", function () {
    assert.equal(nupack.calculate(), "$1050.00");
  });

  it("adds 1.2% for each person", function () {
    nupack.setPeople("2 people");
    assert.equal(nupack.calculate(), "$1075.20");
  });

  describe("cost by product", function () {

    it("adds 7.5% for drugs", function () {
      nupack.setProduct("drugs");
      assert.equal(nupack.calculate(), "$1128.75");
    });

    it("adds 13% for food", function () {
      nupack.setProduct("food");
      assert.equal(nupack.calculate(), "$1186.50");
    });

    it("adds 2% for electronics", function () {
      nupack.setProduct("electronics");
      assert.equal(nupack.calculate(), "$1071.00");
    });

    it("remains the same for everything else", function () {
      nupack.setProduct("any");
      assert.equal(nupack.calculate(), "$1050.00");
    });

  });

  describe("end-to-end scenarios", function () {

    it("passes Scenario #1", function () {
      nupack.setPrice("$1299.99");
      nupack.setPeople("3 people");
      nupack.setProduct("food");
      assert.equal(nupack.calculate(), "$1591.58");
    });

    it("passes Scenario #2", function () {
      nupack.setPrice("$5432.00");
      nupack.setPeople("1 person");
      nupack.setProduct("drugs");
      assert.equal(nupack.calculate(), "$6199.81");
    });

    it("passes Scenario #3", function () {
      nupack.setPrice("$12456.95");
      nupack.setPeople("4 people");
      nupack.setProduct("books");
      assert.equal(nupack.calculate(), "$13707.63");
    });

  });

});
