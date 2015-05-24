'use strict';

socialNetworkApp.factory('userService', function ($http, baseServiceUrl) {
    var service = {},
        serviceUrl = baseServiceUrl + '/users',
        url;

    service.Login = function (loginData, success, error) {
        url = serviceUrl + '/Login';
        $http.post(url, loginData)
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.Register = function (registerData, success, error) {
        url = serviceUrl + '/Register';
        $http.post(url, registerData)
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.GetMyProfile = function (success, error) {
        url = baseServiceUrl + '/me';
        $http.get(url, {headers: this.GetHeaders() })
            .success(function (data) {
                success(data)
            }).error(error);
    };

    service.GetUserProfile = function (username, success, error) {
        url = baseServiceUrl + '/users/' + username;
        $http.get(url, {headers: this.GetHeaders() })
            .success(function (data) {
                success(data)
            }).error(error);
    };

    service.EditUserProfile = function (editUserData, success, error) {
        url = baseServiceUrl + '/me';
        $http.put(url, editUserData, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data)
            }).error(error);
    };

    service.GetFriendRequests = function(headers, success, error) {
        url = baseServiceUrl + '/me/requests';
        $http.get(url, { headers: headers })
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.ChangePassword = function (passwordData, success, error) {
        url = baseServiceUrl + '/me/ChangePassword';
        $http.put(url, passwordData, { headers: this.GetHeaders() })
            .success(function () {
                success();
            }).error(error);
    };

    service.SendRequest = function(username, success, error) {
        url = baseServiceUrl + '/me/requests/' + username;
        $http.post(url, null, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.getOwnFriendsPreview = function(success, error) {
        url = baseServiceUrl + '/me/friends/preview';
        $http.get(url, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.getFriendsPreview = function(username, success, error) {
        url = baseServiceUrl + '/users/' + username + '/friends/preview';
        $http.get(url, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.listOwnFriends = function(success, error) {
        url = baseServiceUrl + '/me/friends';
        $http.get(url, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.listFriends = function(username, success, error) {
        url = baseServiceUrl + '/users/' + username + '/friends';
        $http.get(url, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.ApproveRequest = function(id, success, error) {
        url = baseServiceUrl + '/me/requests/' + id + '?status=approved';
        $http.put(url, null, { headers: this.GetHeaders() })
            .success(function () {
                success()
            }).error(error);
    };

    service.RejectRequest = function(id, success, error) {
        url = baseServiceUrl + '/me/requests/' + id + '?status=rejected';
        $http.put(url, null, { headers: this.GetHeaders() })
            .success(function () {
                success()
            }).error(error);
    };

    service.searchUserByName = function(searchTerm, success, error) {
        url = serviceUrl + '/search?searchTerm=' + searchTerm;
        $http.get(url, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data)
            }).error(error);
    };

    service.getUserPreviewData = function(username, success, error) {
        url = serviceUrl + '/' + username + '/preview';
        $http.get(url, { headers: this.GetHeaders() })
            .success(function (data) {
                success(data)
            }).error(error);
    };

    service.SetCredentials = function (serverData) {
        sessionStorage['accessToken'] = serverData.access_token;
        sessionStorage['username'] = serverData.userName;
    };

    service.GetUsername = function () {
        return sessionStorage['username'];
    };

    service.ClearCredentials = function () {
        sessionStorage.clear();
    };

    service.GetHeaders = function() {
        return {
            Authorization: "Bearer " + sessionStorage['accessToken']
        };
    };

    service.isLoggedIn = function () {
        return sessionStorage['accessToken'];
    };

    return service;
});
