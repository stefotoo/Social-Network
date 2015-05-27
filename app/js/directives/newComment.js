'use strict';

socialNetworkApp.directive('newComment', function () {
    return {
        templateUrl: 'templates/directives/new-comment.html',
        restrict: 'A',
        controller: 'NewCommentController'
    }
});
