module.exports = {
  stringToArray: stringAsArray =>
    stringAsArray.split(",").map(str => str.trim()),
  stringToNumberArray: stringAsArray =>
    stringAsArray
      .split(",")
      .map(str => str.trim())
      .map(item => Number(item))
};
