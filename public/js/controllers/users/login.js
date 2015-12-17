define(['../module'], function (controllers) {

    'use strict';

    controllers.controller('LoginController', function ($scope, $window, UsersService) {

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
         * Login submission action
         *
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        Login.submitForm = function () {

            // Check validation has passed
            if ($scope.form.$valid) {
                // Trigger the ajax loader
                Login.loading = true;

                var response = UsersService.login(Login.email, Login.password);

                response.success(function (data) {
                    if (false !== data.success) {

                        var location = (!!$('#js-job-id').val() ? '/jobs/preview/' + $('#js-job-id').val() : '/account')

                        window.location.href = location;
                    } else {
                        Login.error = true;
                    }

                    Login.loading = false;
                })
            }

        }
    });
});