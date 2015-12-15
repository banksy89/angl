<?php

namespace App\Http\Controllers;

use DB;
use App\Models\Job;
use App\Http\Controllers\Controller;

class JobsController extends Controller
{
    /**
     * Jobs displays search listing
     */
    public function listing()
    {
        $job = new Job();

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

    public function show($urlname = "")
    {

    }
}