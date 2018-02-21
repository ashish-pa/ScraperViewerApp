'use strict';

/**
 * @uathor Ashish Patel
 */
appControllers.controller('LoginCtrl', ['$scope', '$q', 'LoginService', '$state', '$cookies', '$mdDialog', function($scope, $q, LoginService, $state, $cookies, $mdDialog) {
    $scope.login = function(cred) {
        /*if(cred.ucid || cred.password || cred.ucid == "" || cred.password == ""){

        }else{*/
             LoginService.login(cred).$promise.then(function(result){
                //console.log("user", result.response);
                if (result.response == "undefined") {
                    //alert('username or password incorrect.')
                    $scope.showAlert();
                }
                else {
                    $cookies.put('token', JSON.stringify(result));
                    $state.go('home');
                }
            });
        //}
    };

    $scope.showAlert = function() {
        alert = $mdDialog.alert({
            title: 'Login Error',
            textContent: 'Wrong credentials entered OR do not have permissions to use',
            ok: 'Close'
        });

        $mdDialog
            .show( alert )
            .finally(function() {
              alert = undefined;
            });
    };
}]);