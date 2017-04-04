function underscoreToSpace() {
  return function(input) {
    input = input || ' ';
    var output = input.replace(/_/g, ' ');
    return output;
  }
}

module.exports = underscoreToSpace;
