<?php


namespace Base\App\Traits\Controller\CRUD;


use Illuminate\Http\Request;
use Illuminate\Http\Response;

trait Unknown
{
    /**
     * redirect the unknown method directly to
     * the repository to handel it
     *
     * @param $method
     * @param $parameters
     * @return mixed
     * @author Amr
     */
    public function __call($method, $parameters)
    {
        $result = $this->getRepository()->{$method}(request(), ...$parameters);
        return response()->vue(SUCCESS_RESPONSE,
            trans('Base::lang.messages.operation_performed_successfully',
                ['attribute' => $this->getTranslatedName()]), $result ?? []);
    }
}