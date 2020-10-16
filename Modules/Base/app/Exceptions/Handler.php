<?php

namespace Base\App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Exception $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Throwable $e)
    {
        dd($e);
        if ($e instanceof ValidationException)
            return $this->validation($e);
        $message = trans('Base::lang.messages.something_went_wrong');
        if ($e instanceof ModelNotFoundException)
            $message = trans('Base::lang.messages.resource_not_found');
        return response()->vue(ERROR_RESPONSE, $message);
    }

    /**
     * validation's response
     * @param Throwable $e
     * @return mixed
     */
    private function validation(Throwable $e)
    {
        return response()->vue(VALIDATION_RESPONSE, $e->validator->errors()->first(), $e->validator->errors());
    }


}
