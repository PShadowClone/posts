<?php

namespace Base\App\Http\Controllers;

use Base\App\Traits\Base;
use Base\App\Traits\Controller\Attributes;
use Base\App\Traits\Controller\CRUD;
use Base\App\Traits\Controller\Init;
use Base\App\Traits\Translation;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use Base,
        Attributes,
        CRUD,
        Translation,
        Init;


    function master()
    {
        return view('Base::master');
    }
}
