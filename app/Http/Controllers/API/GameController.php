<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\GameRequest;
use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\GameType;
use Illuminate\Contracts\Validation\Validator;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
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
        $game = new Game;
        $game->name   = $request->name;
        $game->studio = $request->studio;
        $game->save();

        $game->types()->sync($request->types);

        return response()->json('Игра успешно добавлена', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id): \Illuminate\Http\JsonResponse
    {
        $game = Game::find($id);

        if (is_null($game)) {

            $response = [
                'success' => false,
                'message' => 'Игра не найдена.',
            ];

            return response()->json($response, 404);
        }

        return response()->json($game, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request): \Illuminate\Http\JsonResponse
    {
        $game = Game::find($request->id);

        if (is_null($game)) {

            $response = [
                'success' => false,
                'message' => 'Игра не найдена.',
            ];

            return response()->json($response, 404);

        } else {

            $game->name   = $request->name;
            $game->studio = $request->studio;
            $game->save();

            $game->types()->sync($request->types);

            return response()->json('Игра успешно отредактирована - '.$game->name, 200);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $game = Game::find($id);
        $game->delete();
        return response()->json('Игра удалена - '.$game->name, 200);
    }
}
