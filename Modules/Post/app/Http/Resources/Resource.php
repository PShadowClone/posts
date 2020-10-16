<?php

namespace Post\App\Http\Resources;


class Resource extends \Base\App\Http\Resources\Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'body' => $this->body,
            'image' => asset('storage/'.$this->image)
        ];
    }
}
