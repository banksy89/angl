define(['../module'], function (directives) {

    'use strict';

    /**
     * Directive for populating the panels of the tabs
     */
    directives.directive('panel', function () {
        return {
            require: '^tabs',
            restrict: 'E',
            transclude: true,
            scope: {title: '@'},
            link: function (scope, element, attrs, tabsController) {
                tabsController.addPanel(scope);
            },
            template:
                '<div ng-class="{active: selected}" ng-transclude></div>',
                replace: true
        }
    });
});