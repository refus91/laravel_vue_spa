<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function validError($errors): \Illuminate\Http\JsonResponse
    {
        $response = [
            'success' => false,
            'message' => 'Ошибка валидации.',
        ];

        if (!empty($errors)){
            $response['data'] = $errors;
        }

        return response()->json($response, 422);
    }

    public function gameNotFound($type = null): \Illuminate\Http\JsonResponse
    {
        if (is_null($type)) {
            $message = 'Игра не найдена.';
        } else {
            $message = 'Игр с жанром '.$type.' не найдено.';
        }

        $response = [
            'success' => false,
            'message' => $message,
        ];

        return response()->json($response, 404);
    }
}
