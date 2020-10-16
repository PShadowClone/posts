<?php


namespace Base\App\Traits\Controller\CRUD;


trait Update
{
    /**
     * update resource using the passed id
     *
     * @param \Base\App\Http\Requests\Request $request
     * @return mixed
     * @author Amr
     */
    public function update(\Base\App\Http\Requests\Request $request, $id)
    {
        $result = $this->getRepository()->update($request, $id);
        return response()->vue(SUCCESS_RESPONSE, trans('Base::lang.messages.updated_successfully', ['attribute' => $this->getTranslatedName()]), $result);
    }
}