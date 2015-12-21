define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        //------------------------
        //  Specific Job Routes
        //------------------------

        $routeProvider.when('/jobs/edit/:id', {
            templateUrl: 'templates/jobs/edit.html',
            controller: 'JobsController'
        });

        $routeProvider.when('/jobs/preview/:id', {
            templateUrl: 'templates/jobs/preview.html',
            controller: 'JobsPreviewController'
        });

        $routeProvider.when('/jobs/complete', {
            templateUrl: 'templates/jobs/complete.html'
        });

        $locationProvider.html5Mode(true);
    }]);
});