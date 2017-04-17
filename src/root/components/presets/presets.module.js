var presetsComponents = angular.module('components.presets', [
  ])
  .constant('PresetsConstant', require('./presets.constant'))
  .component('presets', require('./presets/presets.component'))
  .component('preset', require('./preset/preset.component'));


module.exports = presetsComponents.name;
