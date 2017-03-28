function FilterController() {
  var ctrl = this;

  ctrl.selectFilter = function() {
    this.onSelect({
      $event: {
        filter: this.filter
      }
    })
  };
}

module.exports = FilterController;
