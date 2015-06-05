<!DOCTYPE html>
<html lang="en">
@include('partials/_head')
<body data-ng-app="develops">
<!--[if lt IE 8>
    <p class="browsehappy">
        You are using an <strong>outdated</strong> browser.
        Please <a href="http://browsehappy.com/">upgrade your browser</a>
        to improve your experience.
    </p>
<![endif]-->

<!-- begin: navbar -->
@include('partials/_nav')
<!-- end: navbar -->


<!-- begin: content -->
@yield('content')
<!-- end: content -->

<!-- end: content container -->

<!-- begin: footer -->
@include('partials/_footer')
<!-- end: footer -->


<!-- Scripts -->
<script src="{{elixir('js/vendor.min.js')}}"></script>
<script src="{{elixir('js/custom.min.js')}}"></script>


<!-- External scripts (eg. analytics) should be placed here -->
@include('partials/_analytics')

</body>
</html>



{{--<ul class="nav navbar-nav navbar-right">--}}

{{--</ul>--}}