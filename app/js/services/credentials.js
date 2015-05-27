'use strict';

socialNetworkApp.factory('credentials',
    ['$sessionStorage', '$localStorage', function ($sessionStorage, $localStorage) {
        function saveTokenInLocalStorage(sessionToken, tokenType){
            $localStorage.$default({
                'authorization': tokenType + ' ' + sessionToken
            });
        }

        function saveTokenInSessionStorage(sessionToken, tokenType) {
            $sessionStorage.$default({
                'authorization': tokenType + ' ' + sessionToken
            });
        }

        function deleteCredentials() {
            $localStorage.$reset();
            $sessionStorage.$reset();
        }

        function checkForSessionToken() {
            return ($sessionStorage.authorization || $localStorage.authorization);
        }

        function getAuthorization() {
            if ($sessionStorage.authorization) {
                return $sessionStorage.authorization;
            } else if ($localStorage.authorization) {
                return $localStorage.authorization;
            }
        }

        function saveLoggedUser(user) {
            $localStorage.$default({
                'loggedUser': user
            });
        }

        function getLoggedUser() {
            return $localStorage.loggedUser;
        }

        return {
            saveTokenInLocalStorage: saveTokenInLocalStorage,
            saveTokenInSessionStorage: saveTokenInSessionStorage,
            deleteCredentials: deleteCredentials,
            checkForSessionToken: checkForSessionToken,
            getAuthorization: getAuthorization,
            saveLoggedUser: saveLoggedUser,
            getLoggedUser: getLoggedUser
        }
}]);
