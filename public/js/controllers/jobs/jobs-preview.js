define(['../module'], function (controllers) {

    'use strict';

    /**
     * Controller for displaying and handling any CRUD
     *
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    controllers.controller('JobsPreviewController', function ($scope, $http, $window, $routeParams, JobsService, UsersService) {

        $scope.data = {};
        $scope.showLogin = false;
        $scope.showPreview = true;

        var jobId = $routeParams.id;

        JobsService.getJob(jobId).then(function (data) {

            // Display preview otherwise display login/register template
            if (false !== data.config['user-authorised']) {
                if (false !== data.data.success)  {
                    $scope.data = data.data.contents;
                }
            } else {
                $scope.showLogin = true;
                $scope.showPreview = false;
            }
        });

    });
});