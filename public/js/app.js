define([
    'angular',
    // 'angular-route',

    // Controllers
    './controllers/intro-form/index',
    './controllers/jobs/index',
    './controllers/users/index',

    // Directives
    './directives/intro-form/index',
    './directives/validators/index',

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
        // 'ngRoute'
    ],
    // Overide angular tags to avoid conflict
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    });
});