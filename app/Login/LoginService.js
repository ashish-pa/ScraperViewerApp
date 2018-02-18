'use strict';
/**
 * Service authenticates user from login page
 * @author Ashish Patel
 */
appServices.factory('LoginService', ['$resource', '$cookies', function($resource, $cookies) {

    return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
    };

    var userObject = {};

    function getCurrentUser(){
        return userObject;
    }

    function login(userCredentials){
        userObject = setAuthentication().search({user: userCredentials});
        return userObject;
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
        userObject = undefined;
        $cookies.remove('token');
        return userObject;
    }
}]);