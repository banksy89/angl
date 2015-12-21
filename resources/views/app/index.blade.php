<!DOCTYPE html>
<html>
<head>
    <title>Hireable - Everyone deserves a chance to grow.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" type="text/css" href="/css/app.css" media="all" />
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <base href="/">
</head>
    <body>
        <div class="outer-wrapper">
            @include ('layout.header')
            <!-- Section where our angular templates will be injected -->
            <div id="main">
                <div ng-view>
                </div>
            </div>
        </div>
        @include('layout.footer')
    </body>
</html>
