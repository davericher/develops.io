<?php namespace App\Http\Controllers;

class HomeController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Home Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders your application's "dashboard" for users that
	| are authenticated. Of course, you are free to change or remove the
	| controller as you wish. It is just here to get your app started!
	|
	*/


	/**
	 * Show the application dashboard to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('home');
	}

	public function getProjectData() {
        return response()->json([
            [
                'title' => 'C# Console Framework',
                'faIcon' => 'fa-code',
                'href' => 'https://github.com/davericher/ExtendedConsole',
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
                'title' => 'MrNodeBot',
                'faIcon' => 'fa-android',
                'href' => 'https://github.com/funsocietyirc/MrNodeBot',
                'desc' => 'A Node.js IRC bot framework that will pull its self from github and update without downtime. Helpful in learning asynchronous programming methodologies.'
            ],
            [
                'title' => 'PHP Form Validator',
                'faIcon' => 'fa-check-square-o',
                'href' => 'https://github.com/davericher/validator',
                'desc' => 'A php form validator that has no other dependices and provides a fluent validation.'
            ],
            [
                'title' => 'Widget General Goods',
                'faIcon' => 'fa-gear',
                'href' => 'https://github.com/davericher/cst8256-FinalProject',
                'desc' => 'A ASP.Net 4 MVC 5 project for school that demonstrates plenty of design patterns.'
            ],
            [
                'title' => 'FSociety: Mr. Robot fan site',
                'faIcon' => 'fa-heart',
                'href' => 'https://github.com/funsocietyirc/fsociety-website',
                'desc' => 'Fan site made with Laravel 5.3'
            ]
        ]);
    }

    public function getSocialData() {
        return response()->json([
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
                'href' => 'https://github.com/davericher',
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
        ]);
    }

}
