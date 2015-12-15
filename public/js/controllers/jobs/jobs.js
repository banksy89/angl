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

        var jobData = JobsService.getJob(3);

        // Populate the form with any data we have
        jobData.success(function (data) {
            if (data.status == true) {
                job.data = data.contents;
            }
        });

        /**
         * Updates a job
         *
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        job.updateJob = function () {
            var update = JobsService.updateJob(job.data.id, job.data);

            update.success(function (data) {
                if (data.success) {
                    $window.location.href = '/jobs/show/' + job.data.urlname;
                }
            });
        }
    });
});