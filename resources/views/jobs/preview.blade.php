@extends('layout.default')
@section('content')
    <div class="section">
        <div class="wrap" ng-controller="JobsController as job">
            <input type="hidden" id="js-job-id" value="{!! $id !!}" />
            <div class="grid">
                <div class="l-two-thirds">
                    <div class="job-info">
                        <h1><% job.data.title %></h1>
                        <hr />
                        <p>Location: <% job.data.location %></p>
                        <div class="body">
                            <% job.data.description %>
                        </div>
                        <div ng-show="job.data.perks">
                            <h2>Perks</h2>
                            <p><% job.data.perks %></p>
                        </div>
                    </div>
                </div>
                <div class="l-one-third">
                    <div class="job-aside">
                        <a href="/jobs/complete" class="button button--submit">Continue...</a>
                        <nav class="navigation navigation--block">
                            <a href="">Apply</a>
                            <a href="">View Company Website</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop