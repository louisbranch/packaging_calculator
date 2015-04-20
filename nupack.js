var parser = require("./lib/parser");

function NuPack () {
  this.price = 0;
  this.people = 0;
}

module.exports = NuPack;

NuPack.prototype.setPrice = function (priceStr) {
  this.price = parser.price(priceStr);
};

NuPack.prototype.setPeople = function (peopleStr) {
  this.people = parser.people(peopleStr);
};

NuPack.prototype.setProduct = function (product) {
  this.product = product;
};

NuPack.prototype.calculate = function () {
  const flatCost = 1.05;
  var markup = 1;
  markup += this.people * 0.012;
  markup += this._productMarkup();
  var cost = this.price * flatCost * markup;
  return "$" + cost.toFixed(2);
};

NuPack.prototype._productMarkup = function () {
  switch (this.product) {
    case "drugs": return 0.075;
    case "food":  return 0.13;
    case "electronics": return 0.02;
    default: return 0;
  }
};
