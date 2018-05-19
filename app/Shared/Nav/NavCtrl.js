'use strict';
/**
 * Controller for Navigation menu
 * @author Ashish Patel
 */
appControllers.controller('NavCtrl', ['$scope', 'NavNotifyingService', '$state', 'ShowsService', function($scope, NavNotifyingService, $state, ShowsService){

    $scope.selectedIndex = -1;

    $scope.$watch('selectedIndex', function(current, old){
        console.log("Selected index " + current + " " + old);
    });

    /*
     * Triggered when user searches system from search box on App View
     */
    $scope.search = function(dataObject){
        //$state.go('home');
        NavNotifyingService.notifySearch(dataObject);
    };

    $scope.loadChannels = function(){
        $scope.showLoader = true;
        ShowsService.search({"distinctFieldName": 'channelName'}).$promise.then(function(response){
            $scope.channels = response;
            $scope.showLoader = false;
            console.log($scope.channels);
        });
    };

    $scope.loadChannels();

}]);
