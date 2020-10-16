<?php


namespace Base\App\Http\Filters\Query;


class SelfQuery
{
    /**
     * @author khalid
     * @param $builder
     * @param $filter
     * @return mixed
     * filter by column inside same table
     */
    public function filter($builder, $filter)
    {
        return $builder->{$filter['method']}($filter['column'], $filter['operand'], $filter['value']);
    }
}
