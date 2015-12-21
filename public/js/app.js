define([
    'angular',

    'angular-route',

    // Controllers
    './controllers/index',

    // Directives
    './directives/index',

    // Filters
    //'./filters/index',

    // Services
    './services/index',
    './services/session-injector'
], function (angular) {

    'use strict';

    var app = angular.module('app', [
        'app.controllers',
        'app.directives',
        //'app.filters',
        'app.services',

        // Keeping ngroute as search/dashboard/signup process with be angular route based
        'ngRoute'
    ],
    // Overide angular tags to avoid conflict
    function ($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    });

    // Pop in the session injector into the app
    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('SessionInjector');
    }]);

    return app;
});