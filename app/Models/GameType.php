<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameType extends Model
{

    protected $table = "types";

    public function games(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Game::class,'game_type','type_id', 'game_id');
    }
}
