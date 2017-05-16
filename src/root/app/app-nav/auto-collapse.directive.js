function autoCollapse() {
  return {
    restrict: 'A',
    link: function autoCollapseLink($scope, element, attributes) {
      var navbar = document.getElementsByClassName('navbar')[0],
          navbarBrand = document.getElementsByClassName('navbar-brand')[0],
          navbarCollapse = element[0],
          navbarToggle = angular.element(navbar).find('button')[0];

      function smallViewport() {
        /* 768px is the breakpoint at which bootstrap's nav changes from a
        dropdown to full width */
        return navbar.getBoundingClientRect().width < 768;
      }

      function toggleNav() {
        if (smallViewport()) {
          navbarToggle.click();
        }
      }

      navbarBrand.addEventListener('click', function brandClickHandler() {
        var collapseClasses = navbarCollapse.className.split(' ');
        if (collapseClasses.indexOf('in') !== -1) {
            toggleNav();
        }
      })


      navbarCollapse.addEventListener('click',
        function navbarCollapseClickHandler(event) {
          var clicked = event.target;

          if (clicked.tagName === 'A' || clicked.tagName === 'BUTTON') {
            toggleNav();
          }
        }
      )
    }
  };
}


module.exports = autoCollapse;
