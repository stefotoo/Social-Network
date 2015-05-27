'use strict';

socialNetworkApp.directive('friendRequests', function () {
    return {
        templateUrl: 'templates/directives/friends-requests.html',
        restrict: 'A',
        controller: 'FriendRequestsController'
    }
});
