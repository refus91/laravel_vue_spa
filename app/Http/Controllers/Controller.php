<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

//    public function sendSuccess($message, $data = null): \Illuminate\Http\JsonResponse
//    {
//        $response = [
////            'success' => true,
//            'data'       => $data,
//            'message'    => $message,
//            'alert_type' => 'success'
//        ];
//
//        return response()->json($response, 200);
//    }
//
//    public function sendError($message, $alert_type = 'danger'): \Illuminate\Http\JsonResponse
//    {
//        $response = [
////            'success'    => false,
//            'message'    => $message,
//            'alert_type' => $alert_type
//        ];
//
//        return response()->json($response, 422);
//    }

    public function sendMessage($message, $data = null, $errors = null, $alert_type = 'danger', $code = 422): \Illuminate\Http\JsonResponse
    {
        $response = [
            'errors'     => $errors,
            'data'       => $data,
            'message'    => $message,
            'alert_type' => $alert_type
        ];

        return response()->json($response, $code);
    }

}
