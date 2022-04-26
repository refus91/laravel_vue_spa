<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @param RegisterRequest $request
     * @param $validator
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request): \Illuminate\Http\JsonResponse
    {
        $input = $request->all();
        $input['password']  =  bcrypt($input['password']);
        $user               =  User::create($input);
        $success['token']   =  $user->createToken('App')->plainTextToken;
        $success['name']    =  $user->name;

        return  $this->sendSuccess('Пользователь успешно зарегестрирован.', $success);
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

            return  $this->sendSuccess('Пользователь успешно авторизовался.', $success);
        } else {
            return  $this->sendError('Отказано в авторизации.',);
        }
    }
}
