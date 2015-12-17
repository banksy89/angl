<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use App\Models\Job;
use App\Http\Controllers\Controller;

class JobsController extends Controller
{
    /**
     * Jobs displays search listing
     */
    public function listing()
    {
        return view('jobs.listing');
    }

    /**
     * Edits a job
     *
     * @param  string $id
     * @return Response
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function edit($id = "")
    {
        return view('jobs.edit', ['id' => $id]);
    }

    /**
     * Preview of a job for company use
     *
     * @param  string $id
     * @return Response
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function preview($id = "")
    {
        $job = Job::find($id);

        if (false === $job) {
            throw new Exception("Must provide valid job identifier to preview job");
        }

        if (false !== Auth::check()) {
            return view('jobs.preview', ['id' => $id]);
        }

        // Redirect to another stage
        return redirect('jobs/user/' . $job->id);
    }

    /**
     * Show job
     *
     * @param  string $urlname [description]
     * @return Response
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function show($urlname = "")
    {
        $job = Job::where('urlname', '=', $urlname)->first();

        if (false === $job) {
            throw new Exception("Must provide valid job to display");
        }

        if (false !== Auth::check()) {

        }

        // Redirect to another stage
        return redirect('jobs/user/' . $job->id);
    }

    /**
     * Completed page for adding a job
     *
     * @return Response
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function complete()
    {
        return view('jobs.complete');
    }

    /**
     * Registration for a user within the job positing stage
     *
     * @return Response
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function user($jobId = "")
    {
        return view('auth.register', ['job' => $jobId]);
    }
}