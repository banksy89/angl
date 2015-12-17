@extends('layout.default')
@section('content')
    <div data-ng-view></div>
    <div class="intro">
        <div class="grid">
            <div class="l-two-thirds">
                <div class="intro-content">
                    <h1 class="intro__title"><em>Everyone</em> deserves a chance to grow</h1>
                    <p class="intro__sub-title">The place for Interns and apprentices to kick-start their career and companies to build upon their team with passionate starters.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, convenire</li>
                        <li>Lorem ipsum dolor sit amet, convenire</li>
                        <li>Lorem ipsum dolor sit amet, convenire</li>
                    </ul>
                </div>
            </div>
            <div class="l-one-third">
                <div class="intro-form">
                    <tabs>
                        <panel title="Posting">
                            <div ng-controller="IntroFormController as introForm">
                                <form class="form" ng-submit="introForm.postJob()">
                                    <div class="field">
                                        <label for="">Email</label>
                                        {!! Form::text('email', '', ['class' => 'input', 'ng-model' => 'introForm.email']) !!}
                                    </div>
                                    <div class="field">
                                        <label for="">Industry</label>
                                        <select ng-model="introForm.industry">
                                            <option>Dream industry</option>
                                            <option value="marketing">Marketing</option>
                                        </select>
                                    </div>
                                    <div class="field">
                                        <label for="">Job title</label>
                                        {!! Form::text('title', '', ['class' => 'input', 'placeholder' => 'Awesome apprentice', 'ng-model' => 'introForm.title']) !!}
                                    </div>
                                    <input type="submit" class="button button--submit" value="Get started!" />
                                </form>
                            </div>
                        </panel>
                        <panel title="Looking">
                            {!! Form::open(array('url' => '/jobs', 'class' => 'form', 'method' => 'GET')) !!}
                            <input type="hidden" name="action" value="search" />
                            <div class="field">
                                <label for="">Industry</label>
                                <select>
                                    <option>Dream industry</option>
                                    <option value="marketing">Marketing</option>
                                </select>
                            </div>
                            <div class="field">
                                <label for="">Job title</label>
                                {!! Form::text('title', '', ['class' => 'input', 'placeholder' => 'Awesome apprentice']) !!}
                            </div>
                            <input type="submit" class="button button--submit" value="Start Search!" />
                            {!! Form::close() !!}
                        </panel>
                    </tabs>
                </div>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="wrap">
            <div class="content">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</h1>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </section>
@stop