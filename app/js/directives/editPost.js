'use strict';

socialNetworkApp.directive('editPost', function () {
    return {
        templateUrl: 'templates/directives/edit-post.html',
        restrict: 'A',
        controller: 'EditPostController'
    }
});