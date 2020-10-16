<?php


namespace Base\App\Traits\Repository\CRUD;


use Illuminate\Support\Str;

trait Fetch
{

    /**
     * return object's data according to the passed data
     * @param $id
     * @return mixed
     * @author Amr
     */
    function show($id)
    {
        return $this->collection($this->findModel($id));
    }

    /**
     * show all resources
     *
     * @return mixed
     * @author Amr
     */
    function index()
    {
        if (request()->has('type')) {
            $method = 'index-' . request()->get('type');
            $method = Str::camel($method);
            return $this->{$method}();
        }
        $model = $this->query()->orderBy($this->getOrderedColumn(), $this->getOrderBy())->paginate(10);
        return $this->collection($model, true);
    }

    /**
     * return the query of indexSelect
     *
     * @return mixed
     * @author Amr
     */
    function indexSelectQuery()
    {
        $query = $this->query();
        if (request()->has('except') && is_numeric(request()->get('except')))
            $query = $query->where('id', '<>', request()->get('except'));
        return $query;

    }

    /**
     * returns options
     *
     * @return mixed
     * @author Amr
     */
    function indexSelect()
    {
//        $model = $this->query()->filter(request())->orderBy($this->getOrderedColumn(), $this->getOrderBy())->get();
        $model = $this->indexSelectQuery()->orderBy($this->getOrderedColumn(), $this->getOrderBy())->get();
        return $this->collection($model, true, 'indexSelect');
    }
}
