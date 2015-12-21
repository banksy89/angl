define(['./module'], function (services) {
    'use strict';

    services.factory('SessionInjector', function ($q, $injector) {
        var sessionInjector = {
            request: function (config) {

                if (config.url === '/api/users/authorised') {
                    return config;
                }

                var deferred = $q.defer();
                var $http = $injector.get('$http');

                $http({
                    method: "get",
                    url: '/api/users/authorised'
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