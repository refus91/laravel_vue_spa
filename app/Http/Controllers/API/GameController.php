<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\GameRequest;
use App\Models\Game;
use App\Models\GameType;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $games = Game::with('types')->paginate(10);
        //return response()->json($games, 200);
//        return  $this->sendSuccess('Success', $games);
        return $this->sendMessage('Игры найдены', $games, null ,'success',200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(GameRequest $request): \Illuminate\Http\JsonResponse
    {
        $game = Game::create($request->all());

        $game->types()->sync($request->types);

        return $this->sendMessage("Игра \"{$request->name}\" успешно добавлена.", null, null ,'success',200);

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(int $id): \Illuminate\Http\JsonResponse
    {
        $game = Game::with('types')->find($id);

        if (!$game) {
            return  $this->sendMessage('Игра не найдена.',null,null,'danger',404);
        }
        return $this->sendMessage("Игра найдена.", $game, null ,'success',200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(GameRequest $request, $id): \Illuminate\Http\JsonResponse
    {
        $game = Game::find($id);

        if (!$game) {
            return  $this->sendMessage('Игра не найдена.');
        }

        $game->update($request->all());

        $game->types()->sync($request->types);

        return $this->sendMessage("Игра \"{$game->name}\" успешно отредактирована.", null, null ,'success',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(int $id): \Illuminate\Http\JsonResponse
    {
        $game = Game::find($id);

        if (!$game) {
            return  $this->sendMessage('Игра не найдена.');
        }

        $game->delete();
        return  $this->sendMessage("Игра \"{$game->name}\" успешно удалена", null, null ,'success',200);
    }

    public function getGamesByType($type): \Illuminate\Http\JsonResponse
    {
        $games = new Game;
        $games = $type == 'all' ?  $games->paginate(10) : $games->gamesByType($type)->paginate(10);

        if ($games->isEmpty()) {
            return $this->sendMessage('Игр не найдено.');
        }
        return $this->sendMessage('Игры найдены.', $games, null ,'success',200);
    }

    public function getGamesTypes(): \Illuminate\Http\JsonResponse
    {
        $types =  GameType::orderBy('name','asc')->get();

        return $this->sendMessage('Игры найдены.', $types, null ,'success',200);
    }

}
