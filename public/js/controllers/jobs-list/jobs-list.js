define(['../module'], function (controllers) {

    'use strict';

    controllers.controller('JobsListController', function ($scope, $http, JobsService) {
        var jobList = this;

        // Bit hacky way to do it - relying on the controller/view to first inject the results into a global variable
        // @todo - pass over initial params and make search through js
        jobList.items = window.jobs;

        jobList.noResults = false;

        jobList.search = function () {

            var params = {
                action: "search",
                title: jobList.title,
                industry: jobList.industry
            }

            var searchResults = JobsService.search(params).then(function(data) {
                if (200 == data.status && false !== data.data.status) {
                    jobList.items = data.data.contents;
                } else {
                    jobList.noResults = true;
                }
            });
        }
    });
});