@extends('app')
@section('title','Игра '.$game->name)
@section('content')

    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">Игра {{ $game->name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Студия разработчик: {{ $game->studio }}</h6>
            <p class="card-text">Описание игры</p>
        </div>
        <div class="card-footer">
            <form method="POST" action="{{ route('games.destroy',$game->id) }}">
                @csrf
                <a href="{{ route('games.index') }}" class="card-link pe-2">Вернуться к списку игр</a>
                <a href="{{ route('games.edit',$game->id) }}" class="btn btn-sm btn-secondary">Редактировать</a>
                @method('DELETE')
                <button type="submit" class="btn btn-sm btn-danger">Удалить</button>
            </form>
        </div>
    </div>

@endsection
