define(['../module'], function (services) {
    'use strict';

    services.factory('JobsService', ['$http', function ($http) {
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
            // Add job
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
            return $http({
                method: "put",
                url:    baseApi + jobId,
                params: jobData
            });
        }

        return Jobs;
    }]);
});