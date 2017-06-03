var presetsComponents = angular.module('components.presets', [
  ])
  .constant('PresetConstant', require('./preset.constant'))
  .service('PresetService', require('./preset.service'))
  .component('presets', require('./presets/presets.component'))
  .component('preset', require('./preset/preset.component'));


module.exports = presetsComponents.name;
