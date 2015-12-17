define(['../module'], function (controllers) {

    'use strict';

    /**
     * Controller for handling any CRUD functionality for jobs
     *
     * @param  {Object} $scope
     * @param  {Object} $http
     * @param  {Object} $window
     * @param  {Object} JobsService - Service for accessing Jobs CRUD API
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    controllers.controller('JobsController', function ($scope, $http, $window, JobsService) {
        var job = this;
            job.data = {};

        // Doesn't feel very angulary but temporarily grabbing from a hidden value
        var jobId = $('#js-job-id').val();

        JobsService.getJob(jobId).then(function (data) {
            if (false !== data.data.success)  {
                job.data = data.data.contents;
            }
        });
        /**
         * Updates a job
         *
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        job.updateJob = function () {
            if ($scope.form.$valid) {
                var update = JobsService.updateJob(job.data.id, job.data);

                update.success(function (data) {
                    if (data.success) {
                        $window.location.href = '/jobs/preview/' + job.data.id;
                    }
                });
            }
        }
    });
});