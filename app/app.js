'use strict'; //for secure js - must define variables before use

/**
 * Set all libraries utilized and aliases for controllers, services
 * Set app theme color config and all svg icons to use throughout app
 * @author Ashish Patel
 */
var app = angular.module('DesiWebApp', [
                'ui.router', 	//for routing
                'ngResource', 	//for services
                'ngMaterial', //angular material library
                'ngSanitize', //angular trusted video url
                'ngCookies', //cookies
                'Controllers',	//custom controllers
                'Services',   //custom services
    ])
    .config(['$mdThemingProvider','$mdIconProvider', '$httpProvider', function($mdThemingProvider, $mdIconProvider, $httpProvider) { //app color config
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default':'500',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
            })
            .accentPalette('deep-orange',{
                'default':'500',
                'hue-1':'700'
            })
            .warnPalette('grey', {
                'default':'200',
                'hue-1':'300'
            })
            .backgroundPalette('grey');

        $mdIconProvider
            .icon("search", "app/icons/ic_search_black_48px.svg");


        /*delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.timeout = 1000;*/
    }]);
    

var appControllers = angular.module('Controllers', []);
var appServices = angular.module('Services', []);