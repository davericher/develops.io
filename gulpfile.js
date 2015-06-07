var elixir = require('laravel-elixir');

require('laravel-elixir-uglify');
require('laravel-elixir-clean');
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
    mix.clean(); // Clean Public Directory
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

    // If In production, uglify
    if (elixir.config.production) {
        mix.uglify();
        mix.version([
            'js/bundle.min.js'
        ]);
    } else {
        mix.version([
            'js/bundle.js'
        ]);
    }
});

