<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Validation\Validator;

class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required|min:3|max:50',
            'email'       => 'required|email',
            'password'    => 'required',
            'c_password'  => 'required|same:password',
        ]);

        if ($validator->fails()){

            $errors = $validator->errors();
            $response = [
                'success' => false,
                'message' => 'Ошибка валидации.',
            ];

            if (!empty($errors)){
                $response['data'] = $errors;
            }

            return response()->json($response, 422);
        }

        $input = $request->all();
        $input['password']  =  bcrypt($input['password']);
        $user               =  User::create($input);
        $success['token']   =  $user->createToken('App')->plainTextToken;
        $success['name']    =  $user->name;


        $response = [
            'success' => true,
            'data'    => $success,
            'message' => 'Пользователь успешно зарегестрирован.',
        ];


        return response()->json($response, 200);
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password ])){
            $user = Auth::user();
            $success['token']   =  $user->createToken('App')->plainTextToken;
            $success['name']    =  $user->name;

            $response = [
                'success' => true,
                'data'    => $success,
                'message' => 'Пользователь успешно авторизовался.',
            ];

            return response()->json($response, 200);

        } else {

            $response = [
                'success' => false,
                'message' => 'Отказ авторизации.',
                'data'    => ['error'  =>  'Отказ авторизации'],
            ];

            return response()->json($response, 401);
        }
    }
}
