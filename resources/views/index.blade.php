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
@stop