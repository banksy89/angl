<?php

namespace App\Models;

class JobObserver
{
    /**
     * Event Hook for beforeSave on the model
     *
     * @param  object $model
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function saving($model)
    {
        $model->urlname = str_slug($model->title);
    }
}