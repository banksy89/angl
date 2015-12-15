<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'jobs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'industry'];

    /**
     * Hook for model on boot
     * Instantiates the models associated observer
     */
    public static function boot()
    {
        parent::boot();
        Job::observe(new JobObserver);
    }
}
