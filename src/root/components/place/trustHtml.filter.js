function trustHtmlFilter($sce) {
  return function trustHtml(value, type) {
    return $sce.trustAsHtml(value);
  }
}

module.exports = trustHtmlFilter;
