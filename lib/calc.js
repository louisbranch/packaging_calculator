module.exports = {
  initialCost: initialCost,
  peopleCost: peopleCost
};

function initialCost (price) {
  return price * 1.05;
}

function peopleCost (price, people) {
  var markup = 1 + (people * 0.012);
  return price * markup;
}
