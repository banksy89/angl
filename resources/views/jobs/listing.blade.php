@extends('layout.default')
@section('content')
    <div class="wrap">
        <section class="content" ng-controller="JobsListController as jobsList">
            <h1>Listing</h1>
            <div class="">
                <form class="form" ng-submit="jobsList.search()">
                    <input type="hidden" name="action" value="search" />
                    <div class="field">
                        <label for="">Industry</label>
                        <select ng-model="jobsList.industry">
                            <option value="marketing">Marketing</option>
                        </select>
                    </div>
                    <div class="field">
                        <label for="">Job title</label>
                        {!! Form::text('title', 'Awesome apprentice', ['class' => 'input', 'ng-model' => 'jobsList.title']) !!}
                    </div>
                    <input type="submit" class="button button--submit" value="Start Search!" />
                </form>
            </div>
            <div class="job-list">
                <h1>Displays <% jobsList.items.length %></h1>
                <div class="job-item" ng-repeat="job in jobsList.items">
                    <h2 class="job-item__title"><% job.title %></h2>
                    <p>Industry: <% job.industry %></p>
                    <a href="#">View Job</a>
                </div>
            </div>
        </section>
    </div>
    <script type="text/javascript">
        var jobs = {!! json_encode($jobs) !!}
    </script>
@stop