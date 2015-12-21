define(['../module'], function (controllers) {

    'use strict';

    /**
     * Controls the preview of a job in the signup stage
     *
     * @param  {Object} $scope
     * @param  {Object} $window
     * @param  {Object} $routeParams
     * @param  {Object} JobsService
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    controllers.controller('JobsPreviewController', function ($scope, $window, $routeParams, JobsService) {

        $scope.data = {};

        /**
         * Display Login section
         *
         * @type {Boolean}
         */
        $scope.showLogin = false;

        /**
         * Display Preview section
         *
         * @type {Boolean}
         */
        $scope.showPreview = true;

        /**
         * The job identifier
         *
         * @type {String}
         */
        var jobId = $routeParams.id;

        // Populate scope with job data from the identifier
        JobsService.getJob(jobId).then(function (data) {
            // Display preview otherwise display login/register template
            if (false !== data.config['user-authorised']) {
                if (false !== data.data.success)  {
                    $scope.data = data.data.contents;
                }
            } else {
                $scope.showLogin = true;
                $scope.showPreview = false;
            }
        });

    });
});