'use strict';

/**
 * Controller for _Home.html & _ProviderDetailsView.html
 * @uathor Ashish Patel
 */
appControllers.controller('HomeCtrl', ['$scope', 'NavNotifyingService','$q', 'SearchBooksService', '$state', '$window', '$mdDialog', '$mdMedia',
                                function($scope, NavNotifyingService, $q, SearchBooksService, $state, $window, $mdDialog, $mdMedia) {

    $scope.showLoader = false; //loader boolean
    $scope.ebayItems = [];
    $scope.booksRUsItems = [];

    /*
     * Triggered when user searches from Nav bar which notifies from NavCtrl.js to show provider details
     */
    NavNotifyingService.subscribeSearch($scope, function search(event, searchObject){
        console.log(searchObject);
        $scope.showLoader = true;

        //$state.go('home');
        SearchBooksService.search(searchObject).$promise.then(function(response){
            $scope.ebayItems = response["ebay"][0]["searchResult"][0]["item"];
            $scope.booksRUsItems = response["books-r-us"];
            $scope.showLoader = false;
        });

    });

    /*
     * Triggered when user clicks on md-card of search result items which opens another tab to third party item
     */
    $scope.openUrl = function(url){
       $window.open(url, '_blank');
    };

    $scope.additionalInfo = function(event, bookInfo){
        $scope.currentBook = bookInfo;
        $mdDialog.show({
              templateUrl: 'app/Home/NJITBookInfo/_NjitBookInfoView.html',
              clickOutsideToClose: true,
              scope: $scope,
              preserveScope: true
        });
    }
}]);