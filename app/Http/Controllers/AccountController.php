<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AccountController extends Controller
{
    /**
     * Display login page
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        return view('users.login');
    }
}
