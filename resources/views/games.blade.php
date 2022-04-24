@extends('app')
@section('title','Игры')
@section('content')


<div class="row mt-3">
    <div class="col-6">
        <h2 class="">Список игр</h2>
    </div>
    <div class="col-6 d-flex justify-content-end">
        <a href="{{ route('games.create') }}" class="btn btn-primary p-2">Добавить игру</a>
    </div>
</div>


<table class="table table-striped">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Название</th>
        <th scope="col">Студия</th>
        <th scope="col">Жанр</th>
        <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
        @if ($games->isEmpty())
            <tr>
                <td class="text-center" colspan="5"><h3>Записей не найдено</h3></td>
            </tr>
        @else
            @foreach($games as $key => $game)
                <tr>
                    <td>{{ $key + 1 }}</td>
                    <td><a href="{{ route('games.show',$game->id) }}" class="link-primary">{{ $game->name }}</a></td>
                    <td>{{ $game->studio }}</td>
                    <td>
                        @php $types_count = $game->types->count(); $k = 0; @endphp
                        @foreach($game->types as $type)
                            @php $k++; @endphp
                            {{ $type->name }} {{ $types_count > 1 && $k != $types_count ? ' | ' : ''}}
                        @endforeach
                    </td>
                    <td class="text-end">
                        <form method="POST" action="{{ route('games.destroy',$game->id) }}">
                            @csrf
                            <a href="{{ route('games.edit',$game->id) }}" class="btn btn-sm btn-secondary">Редактировать</a>
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger">Удалить</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        @endif
    </tbody>
</table>

<div class="d-flex justify-content-end">
    {{ $games->links() }}
</div>

@endsection
