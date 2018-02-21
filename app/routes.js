/**
 * Global app configuration for url states with associated view locations and controllers
 * @author Ashish Patel
 */
app.config(function($stateProvider, $urlRouterProvider) { //setup routing between pages
	
		$stateProvider
		    .state('login', {
                    url: '/login',
                    views:{
                        '':{
                            templateUrl: 'app/Login/_LoginView.html',
                            controller: 'LoginCtrl'
                    }
                }
        	})
		    .state('home', {
		    	url: '/home',
		    	resolve: {
                    auth: function(LoginService, $timeout, $state, $cookies) {
                        $timeout(function() {
                            var authToken = $cookies.get('token');
                            if (authToken == undefined) {
                                console.log("User not authenticated!")
                                $state.go('login');
                            }/*else{
                                 $state.go('home');
                            }*/
                         });
                    }
                },
		    	views:{
		            '':{
		                templateUrl: 'app/Home/_Home.html',
		                controller: 'HomeCtrl'
		            },
                    'nav@home':{
                        templateUrl: 'app/Shared/Nav/_NavView.html',
						controller: 'NavCtrl'
                    }
	    	    }
	    	})
            .state('sell', {
                url: '/sell',
                resolve: {
                    auth: function(LoginService, $timeout, $state, $cookies) {
                        $timeout(function() {
                            var authToken = $cookies.get('token');
                            console.log(authToken);
                            if (authToken == undefined) {
                                console.log("User not authenticated!")
                                $state.go('login');
                            }
                         });
                    }
                },
                views:{
                    '':{
                        templateUrl: 'app/SellBook/_SellBookView.html',
                        controller: 'SellBookCtrl'
                    },
                    'nav@sell':{
                        templateUrl: 'app/Shared/Nav/_NavView.html',
                        controller: 'NavCtrl'
                    }
            }
	    });
	
		//by default send to /home
		$urlRouterProvider.when('', 'login');
	});