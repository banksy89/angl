define(['../module'], function (controllers) {

    'use strict';

    /**
     * Handles the posting of the intro form
     *
     * @param  {Object} $scope
     * @param  {Object} $http
     * @param  {Object} $window
     * @param  {Object} JobsService
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
                var sendData = {
                                email: introForm.email,
                                title: introForm.title,
                                industry: introForm.industry
                };

                var request = JobsService.addJob(sendData).then(function (data) {
                    var responseData = data.data;
                    if (200 == data.status && false !== responseData.status) {
                        $window.location.href = "/jobs/edit/" + responseData.contents.id;
                    }
                });
            }

            return false;
        }

    });
});