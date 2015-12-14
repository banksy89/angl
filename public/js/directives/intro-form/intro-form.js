define(['../module'], function (directives) {
    'use strict';

    /**
     * Directive for handling the tab head
     */
    directives.directive('tabs', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope, $element) {
                var panels = $scope.panels = [];

                $scope.select = function (panel) {
                    angular.forEach(panels, function(panel) {
                        panel.selected = false;
                    });
                        panel.selected = true;
                }

                this.addPanel = function (panel) {
                    if (panels.length == 0) {
                        $scope.select(panel);
                    }

                    panels.push(panel);
                }
            },
            template:
                '<div>' +
                    '<div class="field-group">' +
                        '<p ng-repeat="panel in panels" ng-class="{active:panel.selected}" class="field field--radio field--inline">' +
                            '<input type="radio" name="type" value="{{panel.title}}" id="{{panel.title}}" />' +
                            '<label for="{{panel.title}}" ng-click="select(panel)">{{panel.title}}</label>' +
                        '</p>' +
                    '</div>' +
                    '<div class="tabs" ng-transclude></div>' +
                '</div>',
                replace: true
        }
    });

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