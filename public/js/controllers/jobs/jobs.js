define(['../module'], function (controllers) {

    'use strict';

    /**
     * Controller for displaying and handling any CRUD
     *
     * @param  {Object} $scope
     * @param  {Object} $window
     * @param  {Object} JobsService - Service for accessing Jobs CRUD API
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    controllers.controller('JobsController', function ($scope, $window, $routeParams, JobsService) {

        $scope.data = {};

        var jobId = $routeParams.id;

        JobsService.getJob(jobId).then(function (data) {
            if (false !== data.data.success)  {
                $scope.data = data.data.contents;
            }
        });

        /**
         * Method for updating the Job
         *
         * @return {[type]}
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        $scope.updateJob = function () {
            if ($scope.form.$valid) {
                var update = JobsService.updateJob($scope.data.id, $scope.data);

                update.success(function (data) {
                    if (data.success) {
                        $window.location.href = '/jobs/preview/' + $scope.data.id;
                    }
                });
            }
        }
    });
});