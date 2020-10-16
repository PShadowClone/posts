<?php

namespace Base\App\Repositories;

use Base\App\Traits\Base;
use Base\App\Traits\Repository\CRUD;
use Base\App\Traits\Repository\Model;
use Base\App\Traits\Repository\Query;
use Base\App\Traits\Repository\Request as RequestTrait;

use Base\App\Traits\Repository\Resource;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class Repository
{
    use Base, Model, Query, RequestTrait, Resource, CRUD;

}
