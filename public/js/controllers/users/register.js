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
                var userData = {email: Login.email, password: Login.password, jobId: jobId};
                Login.handleForm(userData, '/jobs/preview/' + jobId);
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

                                    // Once a user has been created we want to log them
                                    UsersService.login(user.email, user.password).then(function (response) {
                                        if (200 === data.status && true == data.data.success) {
                                            window.location.href = location;
                                        }
                                    });
                                 } else {
                                     Login.error = true;
                                 }

                                 Login.loading = false;
                            });
            }
        }
    });
});