<?php


namespace Base\App\Traits;


use Base\App\Exceptions\PredicateNotFoundException;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

trait Base
{


    /**
     * get the Reflection class
     *
     * @return \ReflectionClass
     * @throws \ReflectionException
     * @author Amr
     */
    private function __getReflectionClass()
    {
        return (new \ReflectionClass($this));
    }

    /**
     * get the class name of the current object
     *
     * @return string
     * @throws \ReflectionException
     * @author Amr
     */
    private function __getClassName()
    {
        return $this->__getReflectionClass()->getShortName();
    }

    /**
     * get the namespace of types
     *
     * @param $type
     * @return string
     * @author Amr
     */
    private function __getNamespace($type)
    {
        return $this->__getModuleName() . '\\' . config('Base.namespaces.' . $type) . '\\' . Str::ucfirst(Str::plural($type));
    }

    /**
     * this function used to predicate the types user passes
     * according to the structure we work on it
     *
     * @param $search
     * @param $replace
     * @return mixed
     * @throws PredicateNotFoundException
     * @throws \ReflectionException
     * @author Amr
     */
    private function __predicateClass($type)
    {
        $class = $this->__getNamespace($type) . '\\' . $this->predicateClassName($type);
        $classExistence = class_exists($class);
        if (!$classExistence)
            throw new PredicateNotFoundException('No class provided');
        return $class;
    }


    /**
     * predicate the name of request
     * if the name of controller is Controller,
     * means you use the default controller of package
     * otherwise you use custom request that has the same name
     * of controller (According to structure we use)
     *
     * @return string
     * @throws \ReflectionException
     * @author Amr
     */
    private function predicateClassName($type)
    {
        $name = $this->__getClassName();
        return Str::ucfirst($name == Str::singular($this->__getPackageName()) ? $type == 'model' ? $this->__getModelFromModuleName() : $type : $name);
    }

    /**
     * get the package name of class
     *
     * @return mixed
     * @author Amr
     */
    private function __getPackageName()
    {
        $class = get_class($this);
        $dirs = explode('\\', $class);
        return $dirs[sizeof($dirs) - 2];
    }

    /**
     * get model name from module's  name
     * @return mixed
     * @author  Amr
     *
     */
    function __getModelFromModuleName()
    {
        $moduleName = $this->__getModuleName();
        if (!strpos($moduleName, '\\'))
            return $moduleName;
        return collect(explode('\\', $moduleName))->last();
    }

    /**
     * get the module name of class
     *
     * @return mixed
     * @author Amr
     */
    private function __getModuleName()
    {
        $class = get_class($this);
        $dirs = explode('\\', $class);
        return $this->__getNamespacePathBeforeApp($dirs);
    }

    /**
     * get the base namespace of called class
     * @param $path
     * @return string
     * @author  Amr
     */
    private function __getNamespacePathBeforeApp($path)
    {
        $beforeApp = collect();
        foreach ($path as $index => $value) {
            if (strtolower($value) == 'app')
                break;
            $beforeApp->push($value);
        }
        return $beforeApp->implode('\\');

    }

    /**
     * get the name of the called action
     *
     * @return string
     * @author Amr
     */
    public function getActionMethod()
    {
        return Route::current()->getActionMethod();
    }
}