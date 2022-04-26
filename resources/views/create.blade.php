@extends('app')
@section('title', isset($game) ? 'Редактирование игры '.$game->name : 'Добавить игру')
@section('content')

    <h1 class="my-2">@yield('title')</h1>
    <form method="POST"
        @if (isset($game))
            action="{{ route('games.update',$game->id) }}"
        @else
          action="{{ route('games.store') }}"
        @endif
        >
        @csrf
        @if (isset($game))
            @method('PUT')
        @endif
        <div class="mb-3 row">
            <div class="col-6">
                <label for="name" class="form-label">Название игры</label>
                <input type="text" name="name" class="form-control" value="{{ old('name', isset($game) ? $game->name : null) }}">
                @error('name')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>
        <div class="mb-3 row">
            <div class="col-6">
                <label for="studio" class="form-label">Студия</label>
                <input type="text" name="studio" class="form-control" value="{{ old('studio', isset($game) ? $game->studio : null) }}">
                @error('studio')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>



        <div class="mb-3 row">
            <h5>Жанр:</h5>
            <div class="col-6 mt-3">
                <div class="row">
                    @foreach($types as $type)
                        <div class="col-3 my-1">
                            <input type="checkbox" name="types[]" class="form-check-input" value="{{ $type->id  }}" {{ isset($game) && $type->games->contains($game->id) ? 'checked' : '' }}>
                            <label class="form-check-label" for="check">{{ $type->name }}</label>
                        </div>
                    @endforeach
                </div>
                @error('types')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>

        <div class="mt-5 row">
            <div class="col-6 d-flex justify-content-end align-items-cente">
                <a href="{{ route('games.index') }}" class="link-primary me-3 mt-1">Вернуться к списку игр</a>
                <button type="submit" class="btn btn-primary">{{ isset($game) ? 'Сохранить ' : 'Добавить '}}</button>
            </div>
        </div>

    </form>
@endsection
