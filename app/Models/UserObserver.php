<?php

namespace App\Models;

class UserObserver
{
    /**
     * Event Hook for beforeSave on the model
     *
     * @param  object $model
     * @author Ashley Banks <ashleysmbanks89@gmail.com>
     */
    public function saving($model)
    {
        // Hash the password on save
        $model->password = bcrypt($model->password);
    }
}