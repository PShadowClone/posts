<?php


namespace Base\App\Traits\Controller\CRUD;


trait Store
{
    /**
     * create new resource
     *
     * @param \Base\App\Http\Requests\Request $request
     * @return mixed
     * @author Amr
     */
    public function store(\Base\App\Http\Requests\Request $request)
    {
        $result = $this->getRepository()->store($request);
        return response()->vue(SUCCESS_RESPONSE, trans('Base::lang.messages.created_successfully', ['attribute' => $this->getTranslatedName()]), $result);
    }
}