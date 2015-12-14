define([
    'angular',
    'angular-route',
    './controllers/jobs-list/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers'
        'ngRoute'
    ],
    // Overide angular tags to avoid conflict
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    });
});