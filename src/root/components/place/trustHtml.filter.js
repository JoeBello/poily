function trustHtmlFilter($sce) {
  return function(value, type) {
    return $sce.trustAsHtml(value);
  }
}

module.exports = trustHtmlFilter;
