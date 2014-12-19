angular.module('ngRouting', ['ui.router', 'ngAnimate'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // $urlRouterProvider.otherwise('/profile');

    $stateProvider

      .state('profile', {
        url         : '/profile',
        templateUrl : 'views/profileHome.ejs',
        controller  : 'caseController'
      })

      .state('new', {
        url         : '/new-case',
        templateUrl : '/views/new-case.html'
      })

      .state('signup', {
        url         : '/register',
        templateUrl : '/views/register.html'
      });

  });
