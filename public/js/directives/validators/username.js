define(['../module'], function (directives) {

    'use strict';

    /**
     * Directive validator for handling username eligibility
     */
    directives.directive('username', function ($q, UsersService) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.username = function (modelValue, viewValue) {

                    var def = $q.defer();

                    var response = UsersService.getUser(modelValue);

                    response.success(function (data) {
                        // Error if there's an entry
                        if (false !== data.status) {
                            def.reject();
                        } else {
                            def.resolve();
                        }
                    });

                    return def.promise;
                }
            }
        }
    });
});