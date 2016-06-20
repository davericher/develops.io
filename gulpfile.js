// Readd clean and uglify

var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir( function (mix) {
    "use strict";
    mix.less('app.less'); // Compile Less

    // Copy Bootstrap Fonts
    mix.copy(
        'resources/assets/bower/bootstrap/fonts',
        'public/fonts'
    );

    // Copy Font awesome fonts
    mix.copy(
        'resources/assets/bower/components-font-awesome/fonts',
        'public/css/fonts'
    );

    // Browserify App
    mix.browserify('app.js');


    mix.version([
            'js/app.js'
    ]);
});

