<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    /**
     * Home
     *
     * @return Response
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function index()
    {
        return view('index', ['headerOver' => true]);
    }
}