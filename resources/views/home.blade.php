@extends('app')

@section('content')
    <!-- begin: jumbotron -->
    <div class="jumbotron">
        <div class="container center">
            <h1>Devel<i class="fa fa-cog fa-spin spinIcon"></i>ps.io</h1>
        </div>
    </div>
    <!-- end: jumbotron -->

    <!-- begin: content container -->
    <div class="container">

        <!--begin: introduction header -->
        <div class="row" id="introSwitch" data-attached="introRow">
            <div class="col-md-12">
                <div class="page-header">
                    <h1>Introduction<i class="fa fa-chevron-down"></i></h1>
                </div>
            </div>
        </div>
        <!-- end: introduction header -->

        <!-- begin: introduction row -->
        <div class="row" id="introRow">
            <div class="col-md-12">
                <div class="contentPanel">
                    <div class="panel">
                        <div class="panel-heading">
                            ./generate --a-witty-introduction
                        </div>
                        <div class="panel-body">
                            Welcome to DevelOps.io! This is a website I will be using to build my understanding of full
                            stack web development. It will start as a small static website where I play with design
                            through the implementation of new css, html, and js techniques. It will then evolve into a
                            dynamic web application fueled by MySql, Laravel, PHP, Node, etc... Continue checking back
                            for interesting links and thoughts, but most of all be sure to play with things and give me
                            feedback.
                        </div>
                        <div class="panel-footer center">
                            <span>{{ Inspiring::quote() }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end: Introduction row -->

        <!--begin: introduction header -->
        <div class="row" id="techSwitch" data-attached="techRow">
            <div class="col-md-12">
                <div class="page-header">
                    <h1>Technologies<i class="fa fa-chevron-down"></i></h1>
                </div>
            </div>
        </div>
        <!-- end: introduction header -->


        <div class="row" id="techRow">
            <div class="col-md-4">
                <div class="contentPanel">
                    <div class="panel">
                        <div class="panel-heading">
                            Languages Used
                        </div>
                        <!-- List group -->
                        <ul class="list-group">
                            <li class="list-group-item">HTML5</li>
                            <li class="list-group-item">CSS3</li>
                            <li class="list-group-item">Less</li>
                            <li class="list-group-item">JavaScript</li>
                            <li class="list-group-item">Angular</li>
                        </ul>
                        <div class="panel-footer center">
                            <i class="fa fa-wrench"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="contentPanel">
                    <div class="panel">
                        <div class="panel-heading">
                            Utilities Used
                        </div>
                        <!-- List group -->
                        <ul class="list-group">
                            <li class="list-group-item">Laravel 5</li>
                            <li class="list-group-item">Twitter Bootstrap</li>
                            <li class="list-group-item">FontAwesome</li>
                            <li class="list-group-item">Gulp / Elixir</li>
                            <li class="list-group-item">Bower</li>
                        </ul>
                        <div class="panel-footer center">
                            <i class="fa fa-cogs"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="contentPanel">
                    <div class="panel">
                        <div class="panel-heading">
                            Server Information
                        </div>
                        <!-- List group -->
                        <ul class="list-group">
                            <li class="list-group-item">Ubuntu Server</li>
                            <li class="list-group-item">Nginx</li>
                            <li class="list-group-item">HHVM</li>
                            <li class="list-group-item">SSL</li>
                            <li class="list-group-item">Digital Ocean</li>
                        </ul>
                        <div class="panel-footer center">
                            <i class="fa fa-server"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- begin: project header -->
        <div class="row" id="projectSwitch" data-attached="projectRow">
            <div class="col-md-12">
                <div class="page-header">
                    <h1>Projects<i class="fa fa-chevron-down"></i></h1>
                </div>
            </div>
        </div>
        <!-- end: project header -->
        <div class="row" id="projectRow" data-ng-controller="projectController as projectCtrl">
            <div class="col-md-12" data-ng-repeat="project in projectCtrl.projects">
                <div class="row">
                    <div class="hidden-sm hidden-xs col-md-2">
                        <div class="projectIcon">
                            <i class="fa fa-5x @{{project.faIcon}}"></i>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="contentPanel">
                            <div class="panel">
                                <div class="panel-heading">
                                    <a href="@{{project.href}}" target="_blank">@{{project.title}}</a>
                                </div>
                                <div class="panel-body">
                                    <p>
                                        @{{project.desc}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
