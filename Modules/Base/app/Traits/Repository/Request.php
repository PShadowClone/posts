<?php


namespace Base\App\Traits\Repository;


use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait Request
{
    /**
     * get request params then change their structure
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     * @author Amr
     */
    protected function getRequestAttributes(\Illuminate\Http\Request $request)
    {
        return $this->parseRequestAttributes($request->only($this->getModel()->getFillable()));
    }

    /**
     * check if the passed params have an array value and that array
     * has id attribute, just get id's value and drop the other attributes
     *
     * @param $request
     * @return array
     * @author Amr
     */
    protected function parseRequestAttributes($request)
    {
        return collect($request)->map(function ($field) {
            if (is_array($field) && collect($field)->has('id'))
                return collect($field)->get('id');
            else if ($field instanceof UploadedFile)
                return Storage::disk('public')->put('images', $field);
            return $field;
        })->toArray();
    }


}