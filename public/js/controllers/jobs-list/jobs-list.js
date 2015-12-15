define(['../module'], function (controllers) {

    'use strict';

    controllers.controller('JobsListController', function ($scope, $http) {
        var jobList = this;
        jobList.items = window.jobs;

        jobList.search = function () {
            var request = $http({
                method: "get",
                url:    "api/jobs",
                cache: true,
                params: {
                    action: "search",
                    title: jobList.title,
                    industry: jobList.industry
                }
            });

            request.success(function (data, status, headers, config) {
                jobList.items = data.contents;
            });
        }
    });
});