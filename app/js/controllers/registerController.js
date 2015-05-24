'use strict';

socialNetworkApp.controller('RegisterController',
    function ($scope, $location, $route, userService, notifyService) {

        $scope.ClearData = function () {
            $scope.loginData = "";
            $scope.registerData = "";
            $scope.userData = "";
            $scope.passwordData = "";
        };

        $scope.register = function () {
            userService.Register($scope.registerData,
                function(serverData) {
                    notifyService.showInfo("Successfully registered");
                    userService.SetCredentials(serverData);
                    $scope.ClearData();
                    $location.path('/news');
                },
                function (serverError) {
                    notifyService.showError("Registration error", serverError);
                    console.log(serverError);
                });
        };

        $scope.logout = function () {
            $scope.ClearData();
            userService.ClearCredentials();
            notifyService.showInfo("Logout successful");
            $route.reload();
        };

        $scope.clear = function () {
            $route.reload();
        };

        $scope.clearStatus = function () {
            $route.reload();
        }
    }
);

