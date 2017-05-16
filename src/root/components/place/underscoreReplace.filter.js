function underscoreReplace() {
  return function replace(input) {
    input = input || ' ';
    var output = input.replace(/_/g, ' ');
    return output;
  }
}

module.exports = underscoreReplace;
