'use strict';

/**
 * Controller for _SellBookView.html
 * @uathor Ashish Patel
 */
appControllers.controller('SellBookCtrl', ['$scope', 'NavNotifyingService', 'LoginService', 'SellerRequestService',
                                   function($scope, NavNotifyingService, LoginService, SellerRequestService) {

    $scope.book = {
        "name":"",
        "edition":"",
        "author":"",
        "cost":"",
        "condition":"",
        "city":"",
        "state":"NJ",
        "sellerEmail":"",
        "image":""
    };

    $scope.bookConditions = ['New','Like New','Used','Acceptable'];
    $scope.paymentOptions = ['Paypal', 'Venmo', 'Cash'];

    /*
     * Triggered when user searches from Nav bar which notifies from NavCtrl.js to show provider details
     */
    /*NavNotifyingService.subscribeSearch($scope, function search(event, searchObject){
        console.log(searchObject);
        $state.go('home');
    });*/

    $scope.processSellBookRequest = function(){
        $scope.book["sellerUcid"] =  LoginService.getCurrentUser();
        console.log($scope.book);
        //make request to nodejs service to save in mongodb
        SellerRequestService.save($scope.book);
    };
}]);