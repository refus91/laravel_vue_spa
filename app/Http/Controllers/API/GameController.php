<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\GameRequest;
use App\Models\Game;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $games = Game::with('types')->paginate();
        return response()->json($games, 200);
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

        return  $this->sendSuccess('Игра успешно добавлена',);
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
            return  $this->sendError('Игра не найдена.');
        }
        return  $this->sendSuccess('Игра найдена', $game);
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
            return  $this->sendError('Игра не найдена.');
        }

        $game->update($request->all());

        $game->types()->sync($request->types);

        return  $this->sendSuccess('Игра успешно отредактирована',);
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

        if (is_null($game)) {
            return  $this->sendError('Игра не найдена.');
        }

        $game->delete();
        return  $this->sendSuccess('Игра удалена - '.$game->name,);
    }

    public function getGamesByType($type): \Illuminate\Http\JsonResponse
    {
        $games = new Game;
        $games = $games->gamesByType($type);

        if ($games->isEmpty()) {
            return  $this->sendError('Игр с жанром '.$type.' не найдено.');
        }

        return  $this->sendSuccess('игры найдены', $games);
    }

}
