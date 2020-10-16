<?php


namespace Base\App\Traits\Repository\CRUD;


use Illuminate\Http\Request;

trait Update
{

    /**
     * update resource according to the given
     * id
     *
     * @param Request $request
     * @param $id
     * @return mixed
     *
     * @author Amr
     */
    public function update(Request $request, $id)
    {
        $model = $this->findModel($id);
        $model->fill($this->getRequestAttributes($request));
        $model->update();
        return $this->collection($model->refresh());
    }
}