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

Route::get('/', function () {
    return view("welcome");
});



Auth::routes();
Route::get("/task/{id}/delete","Api\TasksController@destroy");
Route::post("/task","Api\TasksController@store");
Route::put('/task/{id}/update',"Api\TasksController@update");   
Route::get("/user", function() {
    return Auth::user();
});

Route::get('/{view?}', function () {
    return view('welcome');
})->where('view', '(.*)');