define(['../module'], function (controllers) {

    'use strict';

    controllers.controller('RegisterController', function ($scope, $window, UsersService, JobsService) {

        var Login = this;

        /**
         * Triggers the error message
         *
         * @type {Boolean}
         */
        Login.error   = false;

        /**
         * Triggers the ajax loader
         *
         * @type {Boolean}
         */
        Login.loading = false;

        /**
         * Action for creating a user from a job
         * it grabs the job by a hidden id and populates
         * the userData object and determines the redirect location
         *
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        Login.registerUserFromJob = function () {
            var jobId = $('#js-job-id').val();

            if ($scope.form.$valid) {

                // Call for the job information before saving the user
                // Don't really need to do this but just playing with promises
                // JobsService.getJob(jobId)
                //            .then(function (data) {
                //                 if (200 === data.status && true == data.data.success) {

                //                     var job = data.data.contents;
                //                     var userData = {email: Login.email, password: Login.password, jobId: job.id};

                //                     Login.handleForm(userData, 'jobs/show/' + job.urlname);
                //                 }
                //            });

                var userData = {email: Login.email, password: Login.password, jobId: jobId};
                Login.handleForm(userData, '/jobs/show/' + jobId);
            }
        }

        /**
         * Generic handler for saving a user
         *
         * @param  {Object} user
         * @param  {String} location - The locatino for the redirect
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        Login.handleForm = function (user, location) {
            // Check validation has passed
            if ($scope.form.$valid) {
                // Trigger the ajax loader
                Login.loading = true;

                UsersService.addUser(user)
                            .then(function (data) {
                                 if (200 === data.status && true == data.data.success) {
                                     window.location.href = location;
                                 } else {
                                     Login.error = true;
                                 }

                                 Login.loading = false;
                            });
            }
        }
    });
});