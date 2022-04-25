<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\GameRequest;
use Illuminate\Http\Request;
use App\Models\Game;
use Illuminate\Support\Facades\Validator;

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
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required|min:3|max:50',
            'studio'      => 'required|min:3|max:255',
            'types'       => 'required|array|min:1',
        ]);

        if ($validator->fails()){
            return $this->validError($validator->errors());
        }

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
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(int $id): \Illuminate\Http\JsonResponse
    {
        $game = Game::with('types')->find($id);

        if (is_null($game)) {
            return  $this->gameNotFound();
        }

        return response()->json($game, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {

        $game = Game::find($id);

        if (is_null($game)) {
            return  $this->gameNotFound();
        }

        $validator = Validator::make($request->all(), [
            'name'        => 'required|min:3|max:50',
            'studio'      => 'required|min:3|max:255',
            'types'       => 'required|array|min:1',
        ]);

        if ($validator->fails()) {
            return $this->validError($validator->errors());
        }

        $game->name   = $request->name;
        $game->studio = $request->studio;
        $game->save();

        $game->types()->sync($request->types);

        return response()->json('Игра успешно отредактирована - '.$game->name, 200);
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
            return  $this->gameNotFound();
        }

        $game->delete();
        return response()->json('Игра удалена - '.$game->name, 200);
    }

    public function getGamesByType($type): \Illuminate\Http\JsonResponse
    {
        $games = Game::with('types')->whereHas('types', function ($query) use ($type) {
            $query->where('name', $type);
        })->get();

        if ($games->isEmpty()) {
            return  $this->gameNotFound($type);
        }

        return response()->json($games, 200);
    }

}
