define(['../module'], function (services) {

    'use strict';

    /**
     * Auth Interceptor - validates a users auth session and pops it in a http config
     *
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    services.factory('AuthInterceptor', function ($injector) {
        var sessionInjector = {
            request: function (config) {

                // Avoids a recursion mess
                if (config.url === '/user/authorise') {
                    return config;
                }

                var $q = $injector.get('$q');
                var deferred = $q.defer();
                var $http = $injector.get('$http');

                $http({
                    method: "get",
                    url: '/user/authorise'
                }).success(function (response) {
                    config['user-authorised'] = response.status;
                    deferred.resolve(config);
                }).error(function () {
                    console.log("Authentication failing");
                    deferred.resolve(config);
                });

                return deferred.promise;
            }
        };

        return sessionInjector;
    });

});