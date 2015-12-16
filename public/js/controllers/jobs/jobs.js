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

        var jobData = JobsService.getJob(jobId);

        // Populate the form with any data we have
        jobData.success(function (data) {
            if (data.success == true) {
                job.data = data.contents;
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
                        $window.location.href = '/jobs/show/' + job.data.urlname;
                    }
                });
            }
        }
    });
});