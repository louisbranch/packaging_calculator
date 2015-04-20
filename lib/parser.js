module.exports = {
  price: price,
  people: people
};

const priceRegExp = /^\s*\$?(\d+\.\d{2}?)\s*$/;
const peopleRegExp = /^\s*(\d+)\s+(?:people|person)\s*$/i;

function price (priceStr) {
  var result = priceStr.match(priceRegExp);
  if (result) {
    return parseFloat(result[1]);
  } else {
    return NaN;
  }
}

function people (peopleStr) {
  var result = peopleStr.match(peopleRegExp);
  if (result) {
    return parseInt(result[1]);
  } else {
    return NaN;
  }
}

