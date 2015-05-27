'use strict';

socialNetworkApp.directive('usersSearchResults', function () {
    return {
        templateUrl: 'templates/directives/users-search-results.html',
        restrict: 'A',
        controller: 'UserHeaderController'
    }
});