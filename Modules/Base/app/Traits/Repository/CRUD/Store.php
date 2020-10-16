<?php


namespace Base\App\Traits\Repository\CRUD;


use Illuminate\Http\Request;

trait Store
{
    /**
     * store new resource
     *
     * @param Request $request
     * @return mixed
     *
     * @author Amr
     */
    function store(Request $request)
    {
        $model = $this->getModel()->create($this->getRequestAttributes($request));
        return $this->collection($model);
    }
}