'use strict';

socialNetworkApp.directive('posts', function () {
    return {
        templateUrl: 'templates/directives/posts.html',
        restrict: 'A',
        controller: 'UserWallController'
    }
});
