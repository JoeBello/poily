'use strict';

angular.module('project1')
  .controller('HomeCtrl', function () {
    var home = this;

    home.title = 'Explore your world.';

    home.ctaButton = 'What\'s around?';

    home.aboutLink = 'LEARN MORE ABOUT PROJECT1';

    home.aboutSections = [
      { 'heading': 'Discover.' },
      { 'heading': 'Landmark.' },
      { 'heading': 'Experience.' }
    ];
  })
