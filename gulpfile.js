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

elixir(function (mix) {
    mix.
        clean().
        less('app.less')
        // TODO: Implement when partials are needed
        //.copy(
        //    'resources/assets/js/partials',
        //    'public/js/partials'
        //)
        .copy(
            'resources/assets/bower/bootstrap/fonts',
            'public/fonts'
        ).
        copy(
            'resources/assets/bower/components-font-awesome/fonts',
            'public/css/fonts'
        ).
        browserify('app.js').
        // Turned off for development
        //uglify().
        version([
            'js/bundle.js'
            //'js/bundle.min.js'
        ]);
});
