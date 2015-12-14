<?php

namespace App\Http\Controllers;

use DB;
use App\Job;
use App\Http\Controllers\Controller;

class JobsController extends Controller
{
    /**
     * Method for retrieving job search payload
     *
     * @return json
     */
    public function index()
    {
        $payload = [];
        $payload['success'] = false;

        if (\Input::get('action') == 'search') {
            $jobs = DB::table('jobs')
                        ->where('title', 'LIKE', '%' . \Input::get('title') . '%')
                        ->get();

            if (count($jobs) > 0) {
                $payload['success']  = true;
                $payload['contents'] = $jobs;
            }
        }

        return response()->json($payload);
    }

    /**
     * RESTful Method for creating jobs
     *
     * @return  json
     */
    public function store()
    {
        $payload['success'] = false;

        $job = new Job();

        foreach (\Input::all() as $key => $value) {
            $job->{$key} = $value;
        }

        $output = $job->save();

        if (false !== $output) {
            $payload['success']  = true;
            $payload['contents'] = ['id' => $job->id];
        }

        return response()->json($payload);
    }

    /**
     * RESTful method for updating a job post
     *
     * @param  string $id
     * @return json
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function update($id = "")
    {
        $payload['success'] = false;

        $job = Job::find($id);

        foreach (\Input::all() as $key => $value) {
            $job->{$key} = $value;
        }

        $output = $job->save();

        if (false !== $output) {
            $payload['success']  = true;
        }

        return response()->json($payload);
    }

    /**
     * RESTful method for retrieving a job
     *
     * @param  string
     * @return json
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function show($id = "")
    {
        $payload['status'] = false;

        $output = Job::find($id);

        if (false !== $output) {
            $payload['status']   = true;
            $payload['contents'] = $output;
        }

        return response()->json($payload);
    }

    public function destroy()
    {

    }

    /**
     * Jobs displays search listing
     */
    public function listing()
    {
        $payload = $this->index();

        $viewData['jobs'] = $payload->getData()->contents;

        return view('jobs.listing', $viewData);
    }

    /**
     * Edits a job
     *
     * @param  string $id
     * @return [type]
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function edit($id = "")
    {
        return view('jobs.edit');
    }
}