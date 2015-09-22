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
    return view('home');
});

Route::get('home', 'HomeController@index');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);


// Sample API
Route::group(['prefix' => 'api'], function () {
    // Projects
    Route::get('projects', function () {
        return response( [
            [
                'title' => 'C# Console Framework',
                'faIcon' => 'fa-code',
                'href' => 'https://github.com/ir0ny1/ExtendedConsole',
                'desc' => 'A very convenient way to handle the mundane aspects of console programming. Internal write buffer with character by character color support.'
            ],
            [
                'title' => 'HTML 5 Canvas Invaders from space game',
                'faIcon' => 'fa-space-shuttle',
                'href' => 'http://invaders.ir0ny.com',
                'desc' => 'A HTML 5 / Javascript / Canvas clone of Space Invaders.'
            ],
            [
                'title' => 'Ottawa Swap and buy',
                'faIcon' => 'fa-dollar',
                'href' => 'http://ssab.ir0ny.com',
                'desc' => 'A functional ad posting website I made to learn MVC patterns in php using Laravel 4.'
            ],
            [
                'title' => 'Fallout the Node.JS IRC Bot Framework',
                'faIcon' => 'fa-android',
                'href' => 'https://github.com/ir0ny1/FallOut4Bot',
                'desc' => 'A Node.Js IRC bot framework I build to learn Node.JS, Async, and non blocking eventing driven design.'
            ]

    ]);
    });
    // Social
    Route::get('social', function () {
        return response([
            [
                'href' => 'http://www.facebook.com/davericher',
                'btnStyle' => 'btn-facebook',
                'faStyle' => 'fa-facebook',
                'desc' => 'Facebook'
            ],
            [
                'href' => 'https://twitter.com/DavidJRicher',
                'btnStyle' => 'btn-twitter',
                'faStyle' => 'fa-twitter',
                'desc' => 'Twitter'
            ],
            [
                'href' => 'https://plus.google.com/u/1/+DaveRicher705/',
                'btnStyle' => 'btn-google-plus',
                'faStyle' => 'fa-google-plus',
                'desc' => 'Google Plus'
            ],
            [
                'href' => 'https://github.com/ir0ny1',
                'btnStyle' => 'btn-github',
                'faStyle' => 'fa-github',
                'desc' => 'GitHub'
            ],
            [
                'href' => 'mailto:dave@ir0ny.com',
                'btnStyle' => 'btn-microsoft',
                'faStyle' => 'fa-windows',
                'desc' => 'Email'
            ],
            [
                'href' => 'https://www.linkedin.com/profile/view?id=356450822',
                'btnStyle' => 'btn-linkedin',
                'faStyle' => 'fa-linkedin',
                'desc' => 'LinkedIn'
            ]
        ],
            200,
            ['Access-Control-Allow-Origin' => '*']
        );
    });

});

