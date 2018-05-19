'use strict';

/**
 * Controller for _Home.html & _ProviderDetailsView.html
 * @uathor Ashish Patel
 */
appControllers.controller('HomeCtrl', ['$scope', 'NavNotifyingService','$q', 'ShowsService', '$state', '$window', '$mdDialog', '$mdMedia', '$sce',
                                function($scope, NavNotifyingService, $q, ShowsService, $state, $window, $mdDialog, $mdMedia, $sce) {

    $scope.showLoader = false; //loader boolean
    $scope.currentSelection = {"channelName":"", "showName":"", "showDate":"", "showSource":"", "showPartUrls":"", "showUrl": ""};

    /*
     * Triggered when user searches from Nav bar which notifies from NavCtrl.js to show provider details
     */
    NavNotifyingService.subscribeSearch($scope, function search(event, searchObject){
        console.log(searchObject);
        $scope.showLoader = true;
        $scope.loadShows(searchObject);

    });

    $scope.loadShows = function(channelObject){
        $scope.showLoader = true;
        $scope.showShows = false;
        $scope.showDates = false;
        $scope.showSources = false;
        $scope.showParts = false;
        $scope.showVideo = false;

        $scope.currentSelection.channelName = channelObject.channelName;
        ShowsService.search({"channelName":channelObject.channelName,"distinctFieldName":"showName"}).$promise.then(function(response){
            $scope.shows = response;
            $scope.showLoader = false;
            $scope.showShows = true;
            $scope.showDates = false;
        });
    };

    $scope.loadDates = function(showObject){
        $scope.showLoader = true;
        $scope.showShows = false;
        $scope.showDates = false;
        $scope.showSources = false;
        $scope.showParts = false;
        $scope.showVideo = false;

        $scope.currentSelection.showName = showObject.showName;
        ShowsService.search({"showName":showObject.showName,"distinctFieldName":"showDate"}).$promise.then(function(response){
            $scope.dates = response;
            $scope.showLoader = false;
            $scope.showDates = true;
        });
    };

    $scope.loadShowSources = function(dateObject){
        $scope.showLoader = true;
        $scope.showShows = false;
        $scope.showDates = false;
        $scope.showSources = false;
        $scope.showParts = false;
        $scope.showVideo = false;

        $scope.currentSelection.showDate = dateObject.showDate;
        ShowsService.searchSources({"showName":$scope.currentSelection.showName,"showDate":dateObject.showDate}).$promise.then(function(response){
            $scope.sources = response;
            $scope.showLoader = false;
            $scope.showSources = true;
        });
    };

    $scope.loadShowParts = function(sourceSelection){
        $scope.showShows = false;
        $scope.showDates = false;
        $scope.showSources = false;
        $scope.showParts = true;
        $scope.showVideo = false;

        $scope.currentSelection.showSource = sourceSelection.sourceName;
        delete sourceSelection.sourceName;
        $scope.currentSelection.showPartUrls = sourceSelection;
        console.log($scope.currentSelection.showPartUrls);

    };

    $scope.setCurrentVideoUrl = function(partSelectionUrl){
        $scope.showVideo = true;
        $scope.currentSelection.showUrl = partSelectionUrl;
    };

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
}]);