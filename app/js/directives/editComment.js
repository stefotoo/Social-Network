'use strict';

socialNetworkApp.directive('editComment', function () {
    return {
        templateUrl: 'templates/directives/edit-comment.html',
        restrict: 'A',
        controller: 'EditCommentController'
    }
});