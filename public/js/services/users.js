define(['./module'], function (services) {
    'use strict';

    services.factory('UsersService', ['$http', function ($http) {

        /**
         * Base API location
         *
         * @type {String}
         */
        var baseApi = '/user/';

        var User = this;

        /**
         * Handle login of a user
         *
         * @param  {String} email
         * @param  {String} password
         * @return {Object} promise
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        User.login = function (email, password) {
            return $http({
                method: "post",
                url: baseApi + 'authenticate',
                params: {email: email, password: password}
            });
        }

        /**
         * Check a current valid session
         *
         * @return {Boolean} promise
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        User.authorised = function () {
            return $http({
                method: "get",
                url: '/api' + baseApi + 'authorised'
            });
        }

        /**
         * Retrieves a user
         *
         * @param  {Integer|String} The user identifier
         * @return {Object} promise
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        User.getUser = function (identifer) {
            return $http.get('/api' + baseApi + identifer);
        }

        /**
         * Creates a user post
         *
         * @param  {Object} Data to store
         * @return {Object} promise
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        User.addUser = function (user) {

            // Only attempt insertion with data
            if (null == user) {
                return false;
            }

            return $http({
                method: "post",
                url:    '/api' + baseApi,
                params: user
            });
        }

        /**
         * Update a given user post
         *
         * @param  {Integer} jobId
         * @param  {Object} jobData
         * @return {Object} promise
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        User.updateUser = function (userId, userData) {

            // Only attempt update with user id
            if (null == userId) {
                return false;
            }

            return $http({
                method: "put",
                url:    baseApi + userId,
                params: userData
            });
        }

        return User;
    }]);
});