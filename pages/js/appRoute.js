angular.module('routingScript', ['ngRoute'])

    // configure our routes
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            // route for the about page
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutController',
                controllerAs: 'about'
            })
            // route for the about page
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController',
                controllerAs: 'contact'
            });
        $locationProvider.html5Mode(true);
    });