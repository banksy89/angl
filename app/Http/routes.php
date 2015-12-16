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

Route::get('/', function () {
    return view('index');
});

Route::get('/home', function () {
    return view('index');
});

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

Route::post('user/authenticate', 'UserController@authenticate');
Route::get('user/authenticate', 'UserController@authenticate');

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
// Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

// Account Routes...
Route::get('/account/login', 'AccountController@login');

// Jobs routes...
Route::get('/jobs', 'JobsController@listing');
Route::get('/jobs/show/{urlname}', 'JobsController@show');
Route::get('/jobs/edit/{id}', 'JobsController@edit');
Route::get('/jobs/user/{id}', 'JobsController@user');

