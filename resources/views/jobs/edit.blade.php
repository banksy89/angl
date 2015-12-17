@extends('layout.default')
@section('content')
    <div class="wrap">
        <div class="section">
            <div class="grid">
                <div class="l-two-thirds">
                    <section class="content" ng-controller="JobsController as job">
                        <form ng-submit="job.updateJob()" name="form" novalidate>
                            <input type="hidden" id="js-job-id" value="{!! $id !!}" />
                            <div class="field">
                                <label for="">Title</label>
                                <input type="text" name="title" class="input" ng-model="job.data.title" name="title" required="" />
                                <div ng-show="form.$submitted || form.title.$touched" class="form-error">
                                  <span ng-show="form.title.$error.required">Please provide a job title</span>
                                </div>
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
                                <textarea name="description" class="input" ng-model="job.data.description" name="description" required=""></textarea>
                                <div ng-show="form.$submitted || form.description.$touched" class="form-error">
                                  <span ng-show="form.description.$error.required">Please provide a job description</span>
                                </div>
                            </div>

                            <hr class="form-break" />

                            <div class="field">
                                <label for="">Location</label>
                                <input type="text" name="location" class="input" ng-model="job.data.location" name="location" required="" />
                                <div ng-show="form.$submitted || form.location.$touched" class="form-error">
                                  <span ng-show="form.location.$error.required">Please provide a job location</span>
                                </div>
                            </div>

                            <div class="field">
                                <label for="">Salary</label>
                                <input type="text" name="salary" class="input" ng-model="job.data.salary" name="salary" required="" />
                                <div ng-show="form.$submitted || form.salary.$touched" class="form-error">
                                  <span ng-show="form.salary.$error.required">Please provide a job salary</span>
                                </div>
                            </div>

                            <hr class="form-break" />

                            <div class="field">
                                <label for="email">Application Email</label>
                                <input type="email" ng-model="job.data.email" class="input" name="email" required="" />
                                <div ng-show="form.$submitted || form.email.$touched" class="form-error">
                                  <span ng-show="form.email.$error.required">Tell us your email.</span>
                                  <span ng-show="form.email.$error.email">This is not a valid email.</span>
                                </div>
                            </div>

                            <hr class="form-break" />

                            <div class="form-highlight">
                                <div class="field">
                                    <label for="">Perks</label>
                                    <textarea name="perks" class="input" ng-model="job.perks"></textarea>
                                </div>
                            </div>
                            <input type="submit" class="button button--submit" ng-click="job.submitForm()" value="Create job!" />
                        </form>
                    </section>
                </div>
                <div class="l-one-third">
                    <div class="">
                        <div class="body body--small body--left">
                            <h3>Aside</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop