require.config({

    paths: {
        'angular': 'libs/angular/angular',
        'angular-route': 'libs/angular-route/angular-route',
        'domReady': 'libs/requirejs-domready/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});