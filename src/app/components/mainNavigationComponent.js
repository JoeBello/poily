var mainNavigation = {
  templateUrl: 'app/components/mainNavigation.html',
  controller: function () {
    this.brand = 'Project 1',

    this.menu = [
      {
        name: 'Sign Up',
        component: 'signUp'
      },
      {
        name: 'Log In',
        component: 'logIn'
      }
    ];
  }
};


angular.module('project1')
  .component('mainNavigation', mainNavigation);
