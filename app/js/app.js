'use strict';

var socialNetworkApp = angular.module('socialNetworkApp', ['ngMaterial', 'ngRoute', 'ui.bootstrap']);

socialNetworkApp.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

socialNetworkApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/guest/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/guest/register.html',
        controller: 'RegisterController'
    });


    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/news-feed.html'
    });

});

socialNetworkApp.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }

        if($location.path().indexOf("/user/ads") != -1) {
            $rootScope.showStatuses = true;
        } else {
            $rootScope.showStatuses = false;
        }
    });
});
