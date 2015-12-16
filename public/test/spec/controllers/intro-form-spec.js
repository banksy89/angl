define(['angular',
        'app',
         'angularMocks'
], function (angular) {

    describe('IntroFormController', function () {

        beforeEach(module('app'));

        var $controller, createController, scope, httpBackend, windowMock, JobsService;

        angular.mock.module('config', function ($provide){
            $provide.value('$window', {location: {href: '/jobs/1'}});
        });

        beforeEach(inject(function (_$controller_, $rootScope, $httpBackend, $window, JobsService) {

            $controller = _$controller_;
            scope       = $rootScope.$new();
            windowMock  = $window;
            httpBackend = $httpBackend;

            createController = function () {
                return $controller('IntroFormController', {'$scope': scope, '$http': httpBackend, '$window': windowMock, JobsService: JobsService});
            }

            scope.$digest();
        }));

        it('it should be false without a job title', function () {
            var controller = createController();

            expect(controller.postJob()).toBe(false);
        });

        it('should successfully post some data', function () {
            var controller = createController();

            controller.title = 'Example title';

            httpBackend.expectPOST('/api/jobs/?title=Example+title')
                       .respond(200, "[{status: true}]");

            controller.postJob();

            expect(windowMock.location.href).toEqual('/jobs/1');
        });

    });

});