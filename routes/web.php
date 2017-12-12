<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//    return view('main');
//});


Route::any('{path?}', function()
{
    return view("main");
})->where("path", ".+");

//Route::get('/api/v1/employees/{id?}', 'Employees@index');
//Route::post('/api/v1/employees', 'Employees@store');
//Route::post('/api/v1/employees/{id}', 'Employees@update');
//Route::delete('/api/v1/employees/{id}', 'Employee@destroy');