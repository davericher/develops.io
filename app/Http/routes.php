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
                'title' => 'Invaders From Space',
                'faIcon' => 'fa-space-shuttle',
                'href' => 'http://invaders.ir0ny.com',
                'desc' => 'A clone of the popular retro Space Invaders game. Designed using HTML5 / CSS3 / JavaScript / Canvas / Local Storage. Compatible with Google Chrome.'
            ],
            [
                'title' => 'My Market Ottawa',
                'faIcon' => 'fa-dollar',
                'href' => 'http://ssab.ir0ny.com',
                'desc' => ' A functional responsive first ad posting website designed using Laravel / Bootstrap / Mysql. Used to learn restful web development, MVC methodologies / modern design patterns.'
            ],
            [
                'title' => 'Pipboy 9000 the Node.JS IRC Bot Framework',
                'faIcon' => 'fa-android',
                'href' => 'https://github.com/ir0ny1/FallOut4Bot',
                'desc' => 'A Node.js IRC bot framework that will pull its self from github and update without downtime. Helpful in learning asynchronous programming methodologies.'
            ],
            [
                'title' => 'PHP Form Validator',
                'faIcon' => 'fa-check-square-o',
                'href' => 'https://github.com/ir0ny1/validator',
                'desc' => 'A php form validator that has no other dependices and provides a fluent validation.'
            ],
            [
                'title' => 'Widget General Goods',
                'faIcon' => 'fa-gear',
                'href' => 'https://github.com/ir0ny1/cst8256-FinalProject',
                'desc' => 'A ASP.Net 4 MVC 5 project for school that demonstrates plenty of design patterns.'
            ]
    	]);
    });

    // Social
    Route::get('social', function () {
        return response([
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
                'href' => 'mailto:dave@develops.io',
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

