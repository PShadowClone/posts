<?php


namespace Base\App\Traits\Controller;


use Base\App\Traits\Controller\CRUD\Delete;
use Base\App\Traits\Controller\CRUD\Fetch;
use Base\App\Traits\Controller\CRUD\Store;
use Base\App\Traits\Controller\CRUD\Unknown;
use Base\App\Traits\Controller\CRUD\Update;

trait CRUD
{
    use Store, Update, Delete, Fetch, Unknown;
}