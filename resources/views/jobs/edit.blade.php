@extends('layout.default')
@section('content')
    <div class="wrap">
        <section class="content" ng-controller="JobsController as job">
            <form ng-submit="job.updateJob()">
                <div class="field">
                    <label for="">Title</label>
                    <input type="text" name="title" class="input" ng-model="job.data.title" />
                </div>
                <div class="field">
                    <label for="">Industry</label>
                    <select ng-model="introForm.industry" ng-model="job.industry">
                        <option>Select</option>
                        <option value="Dream industry">Dream industry</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
                <div class="field">
                    <label for="">Description</label>
                    <textarea name="description" class="input" ng-model="job.description"></textarea>
                </div>
                <div class="field">
                    <label for="">Location</label>
                    <input type="text" name="salary" class="input" ng-model="job.location" />
                </div>
                <div class="field">
                    <label for="">Salary</label>
                    <input type="text" name="salary" class="input" ng-model="job.salary" />
                </div>
                <div class="field">
                    <label for="">Perks</label>
                    <textarea name="perks" class="input" ng-model="job.perks"></textarea>
                </div>
                <input type="submit" class="button button--submit" value="Create job!" />
            </form>
        </section>
    </div>
@stop