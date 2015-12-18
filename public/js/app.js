define([
    'angular',
    // Keeping ngroute as search/dashboard/signup process with be angular route based
    // 'angular-route',

    // Controllers
    './controllers/index',

    // Directives
    './directives/index',

    // Filters
    //'./filters/index',

    // Services
    './services/index'
], function (angular) {

    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        //'app.filters',
        'app.services',

        // Keeping ngroute as search/dashboard/signup process with be angular route based
        // 'ngRoute'
    ],
    // Overide angular tags to avoid conflict
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    });
});