<?php


namespace Base\App\Traits\Repository\CRUD;


trait Delete
{
    /**
     * delete resource
     * @param $id
     * @return mixed
     * @author Amr
     */
    function delete($id)
    {
        $model = $this->findModel($id);
        $model->delete();
        return $this->collection($model);
    }
}