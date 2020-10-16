<?php


namespace Base\App\Http\Controllers;


class IndexController
{
    public function index()
    {
        return view('Base::master');
    }
}
