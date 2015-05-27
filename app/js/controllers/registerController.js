'use strict';

socialNetworkApp.controller('RegisterController',
    ['$scope', '$route', '$timeout', 'userData', 'credentials', 'toaster', function ($scope, $route, $timeout, userData, credentials, toaster) {
        var defaultNotificationTimeout = 2000;
        $scope.register = register;

        function register(user, registerForm) {
            userData.register(user)
                .$promise
                .then(function (data) {
                    credentials.saveLoggedUser(user);
                    credentials.saveTokenInSessionStorage(data.access_token, data.token_type);
                    $scope.registerForm.$setPristine();
                    toaster.pop('success', 'Register successful!', null, defaultNotificationTimeout);
                    reloadRoute(2000);
                }, function (error) {
                    toaster.pop('error', 'Registration error!', error.data.message, defaultNotificationTimeout);
                })
        }

        function reloadRoute(time) {
            $timeout(function () {
                $route.reload();
            }, time);
        }
    }
]);