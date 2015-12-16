@extends('layout.default')
@section('content')
    <div class="wrap">
        <section class="content" ng-controller="LoginController as loginForm">
            <div class="error" ng-show="loginForm.error">
                <p>Error logging in please check credentials and try again</p>
            </div>
            <form name="form" novalidate>
                {!! csrf_field() !!}

                <div class="field">
                    <label for="email">Email Address</label>
                    <input type="email" ng-model="loginForm.email" class="input" name="email" required="" />
                    <div ng-show="form.$submitted || form.email.$touched">
                      <span ng-show="form.email.$error.required">Tell us your email.</span>
                      <span ng-show="form.email.$error.email">This is not a valid email.</span>
                    </div>
                </div>

                <div class="field">
                    <label for="password">Password</label>
                    <input type="password" ng-model="loginForm.password" class="input" name="password" required="" />
                    <div ng-show="form.$submitted || form.password.$touched">
                      <span ng-show="form.password.$error.required">Tell us your password.</span>
                    </div>
                </div>
                <input type="submit" class="button button--submit" ng-click="loginForm.submitForm()" value="Login" />
                <img src="/images/ajax-loader.gif" class="ajax-loader" ng-show="loginForm.loading" />
            </form>
        </section>
    </div>
@stop