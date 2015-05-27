'use strict';

socialNetworkApp.factory('postData', ['$resource', 'baseUrl', 'credentials', function ($resource, baseUrl, credentials) {
    function getNewsFeed(startPostId, pageSize) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'me/feed?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: {'Authorization': authorization}
                }
            })
            .get();
    }

    function getUserWall(username, startPostId, pageSize) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'users/'+ username + '/wall?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: {'Authorization': authorization}
                }
            })
            .get();
    }

    function addPost(post) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'posts',
            null,
            {
                'save': {
                    method: 'POST',
                    headers: {'Authorization': authorization}
                }
            })
            .save(post);
    }

    function editPost(postId, postContent) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'posts/' + postId,
            null,
            {
                'update': {
                    method: 'PUT',
                    headers: {'Authorization': authorization}
                }
            })
            .update(postContent);
    }

    function deletePost(postId) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'posts/' + postId,
            null,
            {
                'delete': {
                    method: 'DELETE',
                    headers: {'Authorization': authorization}
                }
            })
            .delete();
    }

    function getPostComments(postId) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'posts/' + postId + '/comments',
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: {'Authorization': authorization}
                }
            })
            .get();
    }

    function likePost(postId) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'posts/' + postId + '/likes',
            null,
            {
                'save': {
                    method: 'POST',
                    headers: {'Authorization': authorization}
                }
            })
            .save();
    }

    function unlikePost(postId) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'posts/' + postId + '/likes',
            null,
            {
                'delete': {
                    method: 'DELETE',
                    headers: {'Authorization': authorization}
                }
            })
            .delete();
    }

    return {
        getNewsFeed: getNewsFeed,
        getUserWall: getUserWall,
        addPost: addPost,
        editPost: editPost,
        deletePost: deletePost,
        getPostComments: getPostComments,
        likePost: likePost,
        unlikePost: unlikePost
    }
}]);