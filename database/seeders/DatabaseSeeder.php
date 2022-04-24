<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;
use App\Models\GameType;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        GameType::truncate();


        GameType::insert([
            ['name' => 'Action'],
            ['name' => 'RPG'],
            ['name' => 'Strategy'],
            ['name' => 'Simulator'],
            ['name' => 'Sport'],
            ['name' => 'Adventure'],
            ['name' => 'Shooter'],
            ['name' => 'MOBA'],
            ['name' => 'Quest'],
            ['name' => 'Battle Royale'],
            ['name' => 'Platformer'],
        ]);

        Game::factory(50)->create();

        $types = GameType::all();

        //pivot table game_type
        Game::all()->each(function ($game) use ($types) {
            $game->types()->attach(
                $types->random(rand(1, 3))->pluck('id')->toArray() //даем игре от 1 до 3х жанров
            );
        });

    }
}
