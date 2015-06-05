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
    mix.clean().less('app.less').scripts([
        'jquery/dist/jquery.js',
        'bootstrap/dist/js/bootstrap.js',
        'angular/angular.js'
    ], 'public/js/vendor.js', 'resources/assets/bower').
        scripts([
            'base.js',
            'module.js',
            'develops.js'
        ],
        'public/js/custom.js', 'resources/assets/js')
        .copy('resources/assets/js/partials', 'public/js/partials')
        .copy(
        'resources/assets/bower/bootstrap/fonts', 'public/fonts'
    ).copy(
        'resources/assets/bower/components-font-awesome/fonts', 'public/css/fonts'
    ).uglify()
        .version([
            'js/custom.min.js',
            'js/vendor.min.js'
        ]);
});
