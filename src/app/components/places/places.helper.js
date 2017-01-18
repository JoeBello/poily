function PlacesHelper() {

  function zeroPad(num, length) {
      num = num || '';
      while (num.length < length) {
        num = "0".concat(num);
        zeroPad(num, length - 1);
      }
      return num;
  }

  function zipGen() {
    var generator = Math.floor(Math.random() * 100000).toString();
    var zip = zeroPad(generator, 5);
    return zip;
  }

  return {
    zipGen: zipGen
  };
}

angular
  .module('components.places')
  .factory('PlacesHelper', PlacesHelper);
