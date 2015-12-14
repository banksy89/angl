define(['../module'], function (controllers) {
    'use strict';

    controllers.controller('IntroFormController', function ($scope, $http, $window) {

        var introForm = this;
        introForm.industry = 'Select';

        introForm.postJob = function () {
            var request = $http({
                method: "post",
                url:    "api/jobs",
                cache: true,
                params: {
                    title: introForm.title,
                    industry: introForm.industry,
                }
            });

            request.success(function (data, status, headers, config) {

                // Upon successful creation send them to the initial edit page
                if (data.success == true) {
                    $window.location.href = "/jobs/edit/" + data.contents.id;
                }
            });
        }

    });
});