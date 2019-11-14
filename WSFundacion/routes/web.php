<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['middleware' => []], function () use ($router) {
    $router->get('/persona', ['uses' => 'PersonasController@getPersona']);
    $router->post('/persona', ['uses' => 'PersonasController@postPersona']);
    $router->get('/persona/{id}', ['uses' => 'PersonasController@getPersonaId']);
    $router->put('/persona/{id}', ['uses' => 'PersonasController@putPersona']);    
    $router->post('/registro', ['uses' => 'UserController@register']);
    $router->post('/login', ['uses' => 'UserController@login']);
    $router->delete('/persona/{id}', ['uses' => 'PersonasController@deletePersona']);       
});