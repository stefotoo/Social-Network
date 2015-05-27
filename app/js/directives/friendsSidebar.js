'use strict';

socialNetworkApp.directive('friendsSidebar', function () {
    return {
        templateUrl: 'templates/directives/friends-sidebar.html',
        restrict: 'A',
        controller: 'FriendsSidebarController'
    }
});