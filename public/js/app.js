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

    // Interceptors
    './services/interceptors/auth-interceptor'
], function (angular) {

    'use strict';

    var app = angular.module('app', [
        'app.controllers',
        'app.directives',
        //'app.filters',
        'app.services',
        'ngRoute'
    ],
    // Overide angular tags to avoid conflict
    function ($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    });

    // Pop in any interceptors
    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }]);

    return app;
});