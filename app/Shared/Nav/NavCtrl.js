'use strict';
/**
 * Controller for Navigation menu
 * @author Ashish Patel
 */
appControllers.controller('NavCtrl', ['$scope', 'NavNotifyingService', 'LoginService', '$state', function($scope, NavNotifyingService, LoginService, $state){

    /*
     * Md menu open function
     */
    var originatorEv;
    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
            $mdOpenMenu(ev);
    };

    /*
     * Triggered when user searches system from search box on App View
     */
    $scope.search = function(dataObject){
        $state.go('home');
        NavNotifyingService.notifySearch(dataObject);
    };

    /*
     * Triggered when user clicks Log out from md menu Nav bar
     */
    $scope.logout = function(){
        LoginService.logout();
    };

    /*
     * Triggered when user clicks on Sell a book from md menu Nav bar
     */
     $scope.sellBook = function(){
        $state.go('sell');
     };
}]);
