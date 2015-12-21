@extends('layout.default')
@section('content')
    <!-- Section where our angular templates will be injected -->
    <div id="main">
        <div ng-view>
        </div>
    </div>
@stop