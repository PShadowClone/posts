<?php


namespace Base\App\Traits\Controller;


trait Request
{

    /**
     * controller's request
     *
     * @author Amr
     * @var string
     */
    protected $request = \Base\App\Http\Requests\Request::class;

    /**
     * get controller's  request
     * @return mixed|string
     * @throws RequestNotFoundException
     * @author Amr
     */
    function getRequest()
    {
        if ($this->request !== \Base\App\Http\Requests\Request::class && $this->request != null)
            return $this->request;
        return $this->__predicateRequest();
    }

    /**
     * this function tries to predicate request according
     * to the structure of packages
     *
     * @return mixed
     * @throws RequestNotFoundException
     * @throws \ReflectionException
     * @author Amr
     */
    private function __predicateRequest()
    {
        return $this->__predicateClass('request');
    }

    /**
     * bind request with \Base\App\Http\Requests\Request
     *
     * @throws RequestNotFoundException
     * @author Amr
     */
    function bindRequest()
    {
        app()->bind(\Base\App\Http\Requests\Request::class, $this->getRequest());
    }

}