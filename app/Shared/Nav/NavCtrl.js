'use strict';
/**
 * Controller for Navigation menu
 * @author Ashish Patel
 */
appControllers.controller('NavCtrl', ['$scope', function($scope, NavNotifyingService){


    /*
     * Triggered when user searches system from search box on App View
     */
    $scope.search = function(dataObject){
        NavNotifyingService.notifySearch(dataObject);
    };
}]);
