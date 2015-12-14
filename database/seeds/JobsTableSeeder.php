<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class JobsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jobs[] = 'Web developer';
        $jobs[] = 'Social Media Executive';
        $jobs[] = 'Copywriter';
        $jobs[] = 'Designer';

        for ($i = 0; $i <= 200; $i++) {

            $job = $jobs[rand(0, 3)];

            DB::table('jobs')->insert([
                'title'    => $job . ' ' . str_random(10),
                'industry' => 'Marketing'
            ]);
        }
    }
}
