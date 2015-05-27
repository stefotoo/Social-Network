'use strict';

socialNetworkApp.controller('LoginController',
    ['$scope', '$route', '$timeout', 'userData', 'credentials', 'toaster', function ($scope, $route, $timeout, userData, credentials, toaster) {
        $scope.rememberMe = false;
        $scope.login = login;

        function login(user, loginForm) {
            userData.login(user)
                .$promise
                .then(function (data) {
                    if ($scope.rememberMe) {
                        $scope.$storage = credentials.saveTokenInLocalStorage(data.access_token, data.token_type);
                    } else {
                        $scope.$storage = credentials.saveTokenInSessionStorage(data.access_token, data.token_type);
                    }

                    userData.getLoggedUserData()
                        .$promise
                        .then(function (data) {
                            credentials.saveLoggedUser(data);
                            toaster.pop('success', 'Login successful!');
                            $scope.loginForm.$setPristine();
                            reloadRoute(1000);
                        }, function (error) {
                            toaster.pop('error', 'Login error!', error.data.message, 1500);
                            credentials.deleteCredentials();
                            $route.reload();
                        });
                }, function (error) {
                    toaster.pop('error', 'Login error!', error.error_description, 1500);
                });
        }

        function reloadRoute(time) {
            $timeout(function () {
                $route.reload();
            }, time);
        }
    }
]);
