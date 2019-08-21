<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>REACT TODO</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
    
    </head>
    <body>
        @auth
            <div id="root"></div>
        @endauth
        @guest
            <p class="white">Please sign in or sign up</p>  
            <a class="header__link white" href="/login">Login</a>  
            <a class="header__link white" href="/register">Register</a>
        @endguest
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
