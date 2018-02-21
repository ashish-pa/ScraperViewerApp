'use strict';

/**
 * Controller for _Home.html & _ProviderDetailsView.html
 * @uathor Ashish Patel
 */
appControllers.controller('HomeCtrl', ['$scope', 'NavNotifyingService', function($scope, NavNotifyingService) {
    /*
     * Triggered when user searches from Nav bar which notifies from NavCtrl.js to show provider details
     */
    NavNotifyingService.subscribeSearch($scope, function search(event, searchObject){
        console.log(searchObject);
    });
}]);