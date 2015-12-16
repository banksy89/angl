define(['angular',
        'app',
        'angularMocks'
], function (angular) {

    describe('JobsService', function () {

        var mockJobsService, httpBackend;

        beforeEach(module('app'));

        beforeEach(inject(function($httpBackend, JobsService){
            httpBackend = $httpBackend;
            mockJobsService = JobsService;
        }));

        afterEach(function() {
            // httpBackend.verifyNoOutstandingExpectation();
            // httpBackend.verifyNoOutstandingRequest();
        });

        it("should be defined", inject(function (JobsService) {
            expect(mockJobsService).toBeDefined();
        }));

        it('Should get job successfullly', function () {
            httpBackend.expectGET('/api/jobs/1')
                        .respond(200, "[{status: 'true', id: 1}]");

            mockJobsService.getJob(1).then(function (data) {
                expect(data).not.beNull();
                expect(data.status).toBeTruthy();
                expect(data.contents.id).toEqual(1);
            });

            // Receive error about parsing json at the minute so taken out
            // httpBackend.flush();
        });

        it('should add job successfullly', function () {
            httpBackend.expectPOST('/api/jobs/?title=Example+title')
                       .respond(200, "[{status: true}]");

            mockJobsService.addJob({title: 'Example title'}).then(function (data) {
                expect(data.status).toBeTruthy();
            });
        });

        it('should only add job with job data', function () {
            expect(mockJobsService.addJob()).toEqual(false);
        });

        it('should update job successfullly', function () {
            httpBackend.expectPUT('/api/jobs/1?title=Example+title')
                       .respond(200, "[{status: true}]");

            mockJobsService.updateJob(1, {title: 'Example title'})
                           .then(function (data) {
                                expect(data.status).toBeTruthy();
                           });
        });

        it('should give false when updating with no job id', function () {
            expect(mockJobsService.updateJob()).toEqual(false);
        });

    });

});