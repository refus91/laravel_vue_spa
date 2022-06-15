<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @param RegisterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request): \Illuminate\Http\JsonResponse
    {
        $input = $request->all();
        $input['password']  =  bcrypt($input['password']);
        $user               =  User::create($input);
        $data['token']      =  $user->createToken('App')->plainTextToken;
        $data['name']       =  $user->name;

        Auth::login($user);

        return  $this->sendMessage('Пользователь успешно зарегестрирован.', $data, null ,'success',200);
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request): \Illuminate\Http\JsonResponse
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $data['token'] = $user->createToken('App')->plainTextToken;
            $data['name'] = $user->name;

            return $this->sendMessage('Пользователь успешно авторизовался.', $data, null ,'success',200);
        } else {
            $data['email'] = 'error';
            $data['password'] = 'error';
            return  $this->sendMessage('Неверные пара email / пароль. В авторизации отказано.', null, $data);
        }
    }

    public function logout(): \Illuminate\Http\JsonResponse
    {
        try {
            Auth::user()->tokens()->delete();
            Session::flush();
//            Auth::user()->logout();
            return  $this->sendMessage('Пользователь успешно вышел.',null,null,'success',200);
        } catch (\Illuminate\Database\QueryException $ex) {
            return  $this->sendMessage('Ошибка выхода: '.$ex->getMessage());
        }
    }
}
