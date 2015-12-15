define([
    'angular',
    // 'angular-route',
    './controllers/intro-form/index',
    './controllers/jobs/index',
    './directives/intro-form/index',
    //'./filters/index',
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