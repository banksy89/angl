@extends('layout.default')
@section('content')
    <div class="wrap">
        <section class="content">
            <h1>Looks like your either not logged in or don't have an account</h1>
            <h2>Create account</h2>
            <div class="error" ng-show="registerForm.error">
                <p>Error logging in please check credentials and try again</p>
            </div>
            <div ng-controller="RegisterController as registerForm">
                <form name="form" novalidate>
                    <input type="hidden" id="js-job-id" value="{!! $job !!}" />
                    {!! csrf_field() !!}

                    <div class="field">
                        <label for="email">Email Address</label>
                        <input type="email" ng-model="registerForm.email" id="email" class="input" name="email" required="" />
                        <div ng-show="form.$submitted || form.email.$touched">
                          <span ng-show="form.email.$error.required">Please provide your email</span>
                          <span ng-show="form.email.$error.email">This is not a valid email.</span>
                        </div>
                    </div>

                    <div class="field">
                        <label for="password">Password</label>
                        <input type="password" ng-model="registerForm.password" id="password" class="input" name="password" required="" />
                        <div ng-show="form.$submitted || form.password.$touched">
                          <span ng-show="form.password.$error.required">Please provide a password</span>
                        </div>
                    </div>

                    <div class="field">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" ng-model="registerForm.confirmPassword" id="confirm-password" password-check="password" class="input" name="confirmPassword" required="" />
                        <div ng-show="form.$submitted || form.confirmPassword.$touched">
                          <span ng-show="form.confirmPassword.$error.required">Please confirm password</span>
                        </div>
                        <span class="msg-error" ng-show="form.confirmPassword.$error.pwmatch">
                            Passwords do must match
                        </span>
                    </div>
                    <input type="submit" class="button button--submit" ng-click="registerForm.registerUserFromJob()" value="Login" />
                    <img src="/images/ajax-loader.gif" class="ajax-loader" ng-show="registerForm.loading" />
                </form>
            </div>
            <h2>Login</h2>
        </section>
    </div>
@stop