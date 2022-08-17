<?php
/**
 * Routes configuration.
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * It's loaded within the context of `Application::routes()` method which
 * receives a `RouteBuilder` instance `$routes` as method argument.
 *
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */

use Cake\Routing\Route\DashedRoute;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;


/*
 * The default class to use for all routes
 *
 * The following route classes are supplied with CakePHP and are appropriate
 * to set as the default:
 *
 * - Route
 * - InflectedRoute
 * - DashedRoute
 *
 * If no call is made to `Router::defaultRouteClass()`, the class used is
 * `Route` (`Cake\Routing\Route\Route`)
 *
 * Note that `Route` does not do any inflections on URLs which will result in
 * inconsistently cased URLs when used with `:plugin`, `:controller` and
 * `:action` markers.
 */
/** @var \Cake\Routing\RouteBuilder $routes */
$routes->setRouteClass(DashedRoute::class);

// Route static method
Router::connect('/second-route', [
    'controller' => 'First', 
    'action' => 'secondRoute',
]);


// PREFIX Routing

Router::prefix('Admin', function(RouteBuilder $builder){

    $builder->connect('/logout', ['controller' => 'Admin', 'action' => 'logout']);
    $builder->connect('/add', ['controller' => 'Admin', 'action' => 'add']);
    $builder->connect('/all', ['controller' => 'Admin', 'action' => 'all']);
    $builder->connect('/edit/*', ['controller' => 'Admin', 'action' => 'edit']);
    $builder->connect('/delete/*', ['controller' => 'Admin', 'action' => 'delete']);

    $builder->connect('/', ['controller' => 'Admin', 'action' => 'index']);

    $builder->connect('/advans', ['controller' => 'Advans', 'action' => 'index']);
    $builder->connect('/advans/:action/*', ['controller' => 'Advans']);

    $builder->connect('/pages', ['controller' => 'Pages', 'action' => 'index']);
    $builder->connect('/pages/:action/*', ['controller' => 'Pages']);

    $builder->connect('/services', ['controller' => 'Services', 'action' => 'index']);
    $builder->connect('/services/:action/*', ['controller' => 'Services']);

    $builder->connect('/steps', ['controller' => 'Steps', 'action' => 'index']);
    $builder->connect('/steps/:action/*', ['controller' => 'Steps']);

    $builder->connect('/comps', ['controller' => 'Comps', 'action' => 'index']);
    $builder->connect('/comps/:action/*', ['controller' => 'Comps']);

    $builder->connect('/qualities', ['controller' => 'Qualities', 'action' => 'index']);
    $builder->connect('/qualities/:action/*', ['controller' => 'Qualities']);

    $builder->connect('/catalogs', ['controller' => 'Catalogs', 'action' => 'index']);
    $builder->connect('/catalogs/:action/*', ['controller' => 'Catalogs']);

    
    
    $builder->fallbacks();
});


$routes->scope('/', function (RouteBuilder $builder) {

    $builder->connect('/', ['controller' => 'Pages', 'action' => 'home']);
    $builder->connect('/catalogs', ['controller' => 'Pages', 'action' => 'catalogs']);
    

    $builder->connect('/services', ['controller' => 'Services', 'action' => 'index']);
    $builder->connect('/service/*', ['controller' => 'Services', 'action' => 'view']);

    $builder->fallbacks();
});
