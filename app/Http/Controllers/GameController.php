<?php

namespace App\Http\Controllers;

use App\Http\Requests\GameRequest;
use App\Models\Game;
use App\Models\GameType;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $games = Game::with('types')->paginate();
        return view('games',compact('games'));
    }

    //достаем жанры чтобы сформировать чекбоксы во вьюхе создания и редактирования
    protected function types(): \Illuminate\Database\Eloquent\Collection
    {
        return  GameType::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        $types = $this->types();
        return view('create',compact('types'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(GameRequest $request)
    {
        $game = new Game;
        $game->name   = $request->name;
        $game->studio = $request->studio;
        $game->save();

        $game->types()->sync($request->types);

        return redirect()->route('games.index')->with('success', 'Игра добавлена - '.$game->name);;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function show(Game $game)
    {
        return view('show', compact('game'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(Game $game)
    {
        $types = $this->types();
        //Так как game прилетает без связей, то делаю запрос чтобы достать связи и чекнуть чекбоксы
        $game = Game::with('types')->find($game->id);
        return view('create', compact('game', 'types'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function update(GameRequest $request, Game $game)
    {
        $game = Game::find($game->id);
        $game->name   = $request->name;
        $game->studio = $request->studio;
        $game->save();

        $game->types()->sync($request->types);

        return redirect()->route('games.index')->with('success', 'Игра успешно отредактирована - '.$game->name);;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function destroy(Game $game)
    {
        $game->delete();
        return redirect()->route('games.index')->with('danger', 'Игра удалена - '.$game->name);
    }
}
