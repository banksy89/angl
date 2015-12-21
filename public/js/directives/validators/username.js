define(['../module'], function (directives) {

    'use strict';

    /**
     * Directive validator for handling username eligibility/uniqueness
     *
     * @param {Object} $q Promises library
     */
    directives.directive('usernameExists', function ($q, UsersService) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.usernameExists = function (modelValue, viewValue) {

                    var def = $q.defer();

                    var response = UsersService.getUser(modelValue).then(function (data) {

                        if (false !== data.data.status) {
                            ctrl.$setValidity('usernameExists', true);
                            def.reject();
                        } else {
                            ctrl.$setValidity('usernameExists', false);
                            def.resolve();
                        }

                    });

                    return def.promise;
                }
            }
        }
    });
});