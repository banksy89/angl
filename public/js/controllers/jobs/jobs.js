define(['../module'], function (controllers) {

    'use strict';

    /**
     * Controller for handling any CRUD functionality for jobs
     *
     * @param  {Object}
     * @param  {Object}
     * @param  {Object}
     * @param  {Object}
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    controllers.controller('JobsController', function ($scope, $http, $window, JobsService) {
        var job = this;
            job.data = {};

        var jobData = JobsService.getJob(1);

        jobData.success(function (data) {
            if (data.status == true) {
                angular.forEach(data.contents, function (value, key) {
                    job.data[key] = value;
                });
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