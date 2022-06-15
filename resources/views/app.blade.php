<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

    <div class="container mx-auto px-4" id="App">
        <main>
{{--            @if (session()->has('success'))--}}
{{--                <div class="alert alert-success mt-3">{{ session('success') }}</div>--}}
{{--            @endif--}}
{{--            @if (session()->has('danger'))--}}
{{--                <div class="alert alert-danger mt-3">{{ session('danger') }}</div>--}}
{{--            @endif--}}
{{--            @yield('content')--}}

{{--            @if (Auth::check())--}}
{{--                <script>--}}
{{--                    window.Laravel = {!!json_encode(['isLoggedin' => true,'user' => Auth::user()])!!}--}}
{{--                </script>--}}
{{--            @else--}}
{{--                <script>--}}
{{--                    window.Laravel = {!!json_encode([ 'isLoggedin' => false])!!}--}}
{{--                </script>--}}
{{--            @endif--}}
        </main>

    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>

