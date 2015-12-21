define(['../module'], function (controllers) {

    'use strict';

    /**
     * Controls the job listing/search page
     *
     * @param  {Object} $scope
     * @param  {Object} $routeParams
     * @param  {Array}  JobsService
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    controllers.controller('JobsListController', function ($scope, $routeParams, JobsService) {

        $scope.items = [];

        /**
         * Display results message
         *
         * @type {Boolean}
         */
        $scope.noResults = false;

        /**
         * Display loading icon
         *
         * @type {Boolean}
         */
        $scope.loading = true;

        // If a query string exists trigger the search
        if ($routeParams.action) {
            fetchResults($routeParams.title, $routeParams.industry)
        }

        /**
         * Event listener for filter submission
         *
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        $scope.search = function () {

            var params = {
                action: "search",
                title: $scope.title,
                industry: $scope.industry
            }

            fetchResults($scope.title, $scope.industry);
        }

        /**
         * Populates the scope items with a search request
         *
         * @param  {String} title
         * @param  {String} industry
         * @author Ashley Banks <ashleysmbanks89@gmail.com>
         */
        function fetchResults (title, industry) {
            var params = {
                action: "search",
                title: title,
                industry: industry
            }

            JobsService.search(params).then(function(data) {
                if (200 == data.status && false !== data.data.status) {
                    $scope.items = data.data.contents;
                } else {
                    $scope.noResults = true;
                }

                $scope.loading = false;
            });
        }
    });
});