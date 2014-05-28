<?php
namespace App\Controller;

use Base\Application;
use Base\Controller\Controller;

class RootController extends Controller
{
    /**
     * 
     */
    public function indexAction()
    {
        return $this->render('index');
    }
}
