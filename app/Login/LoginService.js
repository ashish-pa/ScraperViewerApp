'use strict';
/**
 * Service authenticates user from login page
 * @author Ashish Patel
 */
appServices.factory('LoginService', ['$resource', '$cookies', '$state', function($resource, $cookies, $state) {

    return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
    };

    function getCurrentUser(){
        var authToken = JSON.parse($cookies.get('token'));
        return authToken.response.ucid;
    }

    function login(userCredentials){
        return setAuthentication().search({user: userCredentials});
    }

    /*
     * API call to fetch provider data at /providers using GET method
     */
    function setAuthentication(){
        return $resource('/authenticate', {}, {
            search: {
                method: 'POST',
                params: {

                },
                url: ''
            }
        });
    }

    function logout(){
        $cookies.remove('token');
        $state.go('login');
    }
}]);