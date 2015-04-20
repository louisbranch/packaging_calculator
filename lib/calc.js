module.exports = {
  initialCost: initialCost,
  peopleCost: peopleCost,
  productCost: productCost
};

function initialCost (price) {
  return price * 1.05;
}

function peopleCost (price, people) {
  var markup = 1 + (people * 0.012);
  return price * markup;
}

function productCost (price, product) {
  var markup = 1 + productMarkup(product);
  return price * markup;
}

function productMarkup(product) {
  switch (product) {
    case "drugs": return 0.075;
    case "food":  return 0.13;
    case "electronics": return 0.02;
    default: return 0;
  }
}
