var allTestFiles = [];
var TEST_REGEXP = /(-spec|-test)\.js$/i;

for (var file in window.__karma__.files) {
    if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

// Get a list of all the test files to include
// Object.keys(window.__karma__.files).forEach(function(file) {
//   if (TEST_REGEXP.test(file)) {
//     // Normalize paths to RequireJS module names.
//     // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
//     // then do not normalize the paths
//     var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
//     allTestFiles.push(normalizedTestModule);
//   }
// });

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/public/js',

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start,

    paths: {
        angular: '/base/public/js/libs/angular/angular',
        angularMocks: '/base/public/js/libs/angular-mocks/angular-mocks'
    },
    shim: {
        angular: { exports: 'angular' },
        angularMocks: { deps: ['angular'] }
    }
});
