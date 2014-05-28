<?php
namespace App\Router;

use Base\Application;
use Base\Router\RouterInterface;

class RootRouter implements RouterInterface
{
    public function load(Application $app)
    {
        $app->get('/', 'App\Controller\RootController::indexAction');
    }
}
