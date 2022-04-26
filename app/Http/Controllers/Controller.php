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

    public function sendSuccess($message, $success = 'success'): \Illuminate\Http\JsonResponse
    {
        $response = [
            'success' => true,
            'data'    => $success,
            'message' => $message,
        ];

        return response()->json($response, 200);
    }

    public function sendError($message): \Illuminate\Http\JsonResponse
    {
        $response = [
            'success' => false,
            'message' => $message,
        ];

        return response()->json($response, 404);
    }

}
