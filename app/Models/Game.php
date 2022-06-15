<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $table = "games";

    protected $fillable = ['name', 'studio'];

    public function types(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(GameType::class, 'game_type', 'game_id', 'type_id')->orderBy('name');
    }


    public function gamesByType($type)
    {

        return $this->with('types')->whereHas('types', function ($query) use ($type) {
            $query->where('name', $type);
        });
    }
}
