@extends('layout.default')
@section('content')
    <section class="section">
        <div class="wrap">
            <h1>Hey, it doesn't look like your logged in...</h1>
            <div class="grid grid--push">
                <p class="u-or">OR</p>
                <div class="l-one-half">
                    <section class="content">
                        <h2 class="title--secondary-sub">Create an account</h2>
                        <div class="error" ng-show="registerForm.error">
                            <p>Error logging in please check credentials and try again</p>
                        </div>
                        <div ng-controller="RegisterController as registerForm">
                            <form name="form" novalidate>
                                <input type="hidden" id="js-job-id" value="{!! $job !!}" />
                                {!! csrf_field() !!}

                                <div class="field">
                                    <label for="email">Email Address</label>
                                    <input type="email" ng-model="registerForm.email" id="email" class="input" name="email" required="" username-exists />
                                    <div ng-show="form.$submitted || form.email.$touched" class="form-error">
                                      <span ng-show="form.email.$error.required">Please provide your email</span>
                                      <span ng-show="form.email.$error.email">This is not a valid email.</span>
                                      <span ng-show="form.email.$error.usernameExists">Email has already been taken</span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label for="password">Password</label>
                                    <input type="password" ng-model="registerForm.password" id="password" class="input" name="password" required="" />
                                    <div ng-show="form.$submitted || form.password.$touched" class="form-error">
                                      <span ng-show="form.password.$error.required">Please provide a password</span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label for="confirm-password">Confirm Password</label>
                                    <input type="password" ng-model="registerForm.confirmPassword" id="confirm-password" password-check="password" class="input" name="confirmPassword" required="" />
                                    <div ng-show="form.$submitted || form.confirmPassword.$touched" class="form-error">
                                      <span ng-show="form.confirmPassword.$error.required">Please confirm password</span>
                                      <span class="msg-error" ng-show="form.confirmPassword.$error.pwmatch">Passwords do must match</span>
                                    </div>
                                </div>
                                <input type="submit" class="button button--submit" ng-click="registerForm.registerUserFromJob()" value="Sign up and continue!" />
                                <img src="/images/ajax-loader.gif" class="ajax-loader" ng-show="registerForm.loading" />
                            </form>
                        </div>
                    </section>
                </div>
                <div class="l-one-half">
                    <h2 class="title--secondary-sub">Log in with an account</h2>
                    <section class="content" ng-controller="LoginController as loginForm">
                        <div class="error" ng-show="loginForm.error">
                            <p>Error logging in please check credentials and try again</p>
                        </div>
                        <form name="form" novalidate>
                            {!! csrf_field() !!}

                            <div class="field">
                                <label for="email">Email Address</label>
                                <input type="email" ng-model="loginForm.email" class="input" name="email" required="" />
                                <div ng-show="form.$submitted || form.email.$touched" class="form-error">
                                    <span ng-show="form.email.$error.required">Tell us your email.</span>
                                    <span ng-show="form.email.$error.email">This is not a valid email.</span>
                                </div>
                            </div>

                            <div class="field">
                                <label for="password">Password</label>
                                <input type="password" ng-model="loginForm.password" class="input" name="password" required="" />
                                <div ng-show="form.$submitted || form.password.$touched" class="form-error">
                                    <span ng-show="form.password.$error.required">Tell us your password.</span>
                                </div>
                            </div>
                            <input type="submit" class="button" ng-click="loginForm.submitForm()" value="Login" />
                            <img src="/images/ajax-loader.gif" class="ajax-loader" ng-show="loginForm.loading" />
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </section>
@stop