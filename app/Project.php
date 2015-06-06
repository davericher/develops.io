<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Watson\Validating\ValidatingTrait;

class Project extends Model
{
    use ValidatingTrait;

    protected $table = "projects";
    protected $fillable = [
        'title','faIcon','href','desc'
    ];
    protected $rules = [
        'title'     =>      'required|unique:projects,title',
        'faIcon'    =>      'required',
        'href'      =>      'required|unique:projects,href',
        'desc'      =>      'required'
    ];
}
