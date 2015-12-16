define(['../module'], function (directives) {

    'use strict';

    /**
     * Directive validator for password check
     */
    directives.directive('passwordCheck', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                var originalPassword = '#' + attrs.passwordCheck;

                elm.add(originalPassword).on('keyup', function () {
                    scope.$apply(function () {
                        var matchValue = elm.val() === $(originalPassword).val();
                        ctrl.$setValidity('pwmatch', matchValue);
                    });
                });
            }
        }
    });
});