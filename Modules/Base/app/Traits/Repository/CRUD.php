<?php


namespace Base\App\Traits\Repository;


use Base\App\Traits\Repository\CRUD\Delete;
use Base\App\Traits\Repository\CRUD\Fetch;
use Base\App\Traits\Repository\CRUD\Store;
use Base\App\Traits\Repository\CRUD\Unknown;
use Base\App\Traits\Repository\CRUD\Update;

trait CRUD
{
    use Store, Update, Delete, Fetch , Unknown;
}