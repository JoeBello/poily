function autoCollapse() {
  return {
    restrict: 'A',
    link: function($scope, element, attributes) {
      var navbar = document.getElementsByClassName('navbar')[0],
          navbarBrand = document.getElementsByClassName('navbar-brand')[0],
          navbarCollapse = element[0],
          navbarToggle = angular.element(navbar).find('button')[0];


      var smallViewport = function() {
        /* 768px is the breakpoint at which bootstrap's nav changes from a
        dropdown to full width */
        return navbar.getBoundingClientRect().width < 768;
      };

      var toggleNav = function() {
        if (smallViewport()) {
          navbarToggle.click();
        }
      };

      navbarBrand.addEventListener('click', function() {
        var collapseClasses = navbarCollapse.className.split(' ');
        if (collapseClasses.indexOf('in') !== -1) {
            toggleNav();
        }
      });


      navbarCollapse.addEventListener('click', function(event) {
        var clicked = event.target;

        if (clicked.tagName === 'A' || clicked.tagName === 'BUTTON') {
          toggleNav();
        }
      })

    }
  }
}


module.exports = autoCollapse;
