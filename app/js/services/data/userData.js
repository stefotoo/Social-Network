'use strict';

socialNetworkApp.factory('userData', ['$resource', 'baseUrl', 'credentials', function ($resource, baseUrl, credentials) {
    function loginUser(user) {
        return $resource(baseUrl + 'users/login')
            .save(user);
    }

    function registerUser(user) {
        return $resource(baseUrl + 'users/register')
            .save(user);
    }

    function logoutUser() {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'users/logout',
            null,
            {
                'save': {
                    method: 'POST',
                    headers: {'Authorization': authorization}
                }
            })
            .save();
    }

    function editUser(user) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'me',
            null,
            {
                'put': {
                    method: 'PUT',
                    headers: {'Authorization': authorization}
                }
            })
            .put(user);
    }

    function changePassword(password) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'me/changepassword',
            null,
            {
                'put': {
                    method: 'PUT',
                    headers: {'Authorization': authorization}
                }
            })
            .put(password);
    }

    function searchUsersByName(name) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'users/search?searchTerm=' + name,
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

    function getLoggedUserData() {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'me',
            null,
            {
                'get': {
                    method: 'GET',
                    headers: {'Authorization': authorization}
                }
            })
            .get();
    }

    function getUserFullData(username) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'users/' + username,
            null,
            {
                'get': {
                    method: 'GET',
                    headers: {'Authorization': authorization}
                }
            })
            .get();
    }

    function getUserPreviewData(username) {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'users/' + username + '/preview',
            null,
            {
                'get': {
                    method: 'GET',
                    headers: {'Authorization': authorization}
                }
            })
            .get();
    }

    return {
        login: loginUser,
        register: registerUser,
        logout: logoutUser,
        edit: editUser,
        getLoggedUserData: getLoggedUserData,
        changePassword: changePassword,
        searchUsersByName: searchUsersByName,
        getUserFullData: getUserFullData,
        getUserPreviewData: getUserPreviewData
    }
}]);