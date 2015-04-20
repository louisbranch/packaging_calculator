module.exports = {
  initialCost: initialCost
};

const priceRegExp = /^\s*\$?(\d+\.\d{2}?)\s*$/;

function initialCost (price) {
  var result = price.match(priceRegExp);
  if (result) {
    return parseFloat(result[1]) * 1.05;
  } else {
    return NaN;
  }
}
