define(['../module'], function (services) {
    'use strict';

    services.factory('JobsService', ['$http', function ($http) {

        /**
         * Base API location
         *
         * @type {String}
         */
        var baseApi = '/api/jobs/';

        var Jobs = this;

        /**
         * Retrieves a job post
         *
         * @param  {Integer} The kob identifier
         * @return {Object}
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        Jobs.getJob = function (jobId) {
            return $http.get(baseApi + jobId);
        }

        /**
         * Creates a job post
         *
         * @param  {Object} Data to store
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        Jobs.addJob = function (job) {

            // Only attempt insertion with data
            if (null == job) {
                return false;
            }

            return $http({
                method: "post",
                url:    baseApi,
                params: job
            });
        }

        /**
         * Update a given job post
         *
         * @param  {Integer} jobId
         * @param  {Object} jobData
         * @return {Object}
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        Jobs.updateJob = function (jobId, jobData) {

            // Only attempt update with job id
            if (null == jobId) {
                return false;
            }

            return $http({
                method: "put",
                url:    baseApi + jobId,
                params: jobData
            });
        }

        return Jobs;
    }]);
});