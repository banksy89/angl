<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Input;
use \App\Models\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Returns authorised session
     *
     * @return \Illuminate\Http\Response json
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function authorised()
    {
        $payload['status'] = Auth::check();

        return response()->json($payload);
    }

    /**
     * Authenticates a user via API request
     *
     * @return \Illuminate\Http\Response json
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function authenticate()
    {
        $payload['status'] = false;

        if (Auth::attempt(['email' => Input::get('email'), 'password' => Input::get('password')])) {
            $payload['status'] = true;
        }

        return response()->json($payload);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $payload['success'] = false;

        $user = new User();
        $updateJob = false;

        foreach ($request->all() as $key => $value) {
            if ('jobId' == $key) {
                $updateJob = $value;
            } else {
                $user->{$key} = $value;
            }
        }

        // Update job with user id
        // @todo - add check on success/failure to save
        if (false !== $updateJob) {
            $job = \App\Models\Job::find($updateJob);
            $job->user = $user->id;
            $job->save();
        }

        $output = $user->save();

        if (false !== $output) {
            $payload['success']  = true;
            $payload['contents'] = ['id' => $user->id];
        }

        return response()->json($payload);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $payload['status'] = false;

        // Integer fallback to standard id field otherwise check for email
        if (0 !== intval($id) && $id > 0) {
            $output = User::find($id);
        } else {
            $output = User::where('email', '=', $id)->first();
        }

        if (null !== $output) {
            $payload['status']   = true;
            $payload['contents'] = $output;
        }

        return response()->json($payload);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
