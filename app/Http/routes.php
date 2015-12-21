<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// API Specific Routes
Route::group(['prefix' => 'api'], function () {
    Route::resource('jobs',
                    'JobsApiController',
                    [
                        'only' => [
                            'index',
                            'store',
                            'show',
                            'destroy',
                            'update'
                        ]
                    ]
    );

    Route::resource('user',
                    'UserController',
                    [
                        'only' => [
                            'index',
                            'store',
                            'show',
                            'destroy',
                            'update'
                        ]
                    ]
    );
});

Route::get('user/authorise', 'UserController@authorise');
Route::post('user/authenticate', 'UserController@authenticate');

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::post('auth/register', 'Auth\AuthController@postRegister');

// Account Routes...
Route::get('/account/login', 'AccountController@login');


