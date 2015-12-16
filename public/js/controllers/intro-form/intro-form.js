define(['../module'], function (controllers) {
    'use strict';

    /**
     * Handles the posting of the intro form
     *
     * @param  {Object} $scope
     * @param  {Object} $http
     * @param  {Object} $window
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    controllers.controller('IntroFormController', function ($scope, $http, $window, JobsService) {

        var introForm = this;

        /**
         * Posts job to be saved and re-routes application
         *
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        introForm.postJob = function () {

            // Only post if we have a value for title first
            if ('' != introForm.title) {
                var request = JobsService.addJob({title: introForm.email, title: introForm.title, industry: introForm.industry});

                request.success(function (data) {

                    // Upon successful creation send them to the initial edit page
                    if (data.success == true) {
                        $window.location.href = "/jobs/edit/" + data.contents.id;
                    }
                });
            }

            return false;
        }

    });
});