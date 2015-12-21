define(['./app'], function (app) {

    'use strict';

    /**
     * Defines the application routes
     *
     * @param  {Object} $routeProvider
     * @param  {Object} $locationProvider
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    return app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'templates/home.html'
        });

        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html'
        });

        //------------------------
        //  Specific Job Routes
        //------------------------

        // Job App - Step 1
        $routeProvider.when('/jobs/edit/:id', {
            templateUrl: 'templates/jobs/edit.html',
            controller: 'JobsController'
        });

        // Job App - Step 2
        $routeProvider.when('/jobs/preview/:id', {
            templateUrl: 'templates/jobs/preview.html',
            controller: 'JobsPreviewController'
        });

        // Job App - Step 3
        $routeProvider.when('/jobs/complete', {
            templateUrl: 'templates/jobs/complete.html'
        });

        // Job search
        $routeProvider.when('/jobs', {
            templateUrl: 'templates/jobs/listing.html',
            controller: 'JobsListController'
        });

        // Remove the # for pretty URL's
        $locationProvider.html5Mode(true);
    }]);
});