<?php

namespace Base\Controller;

use Base\Application;

abstract class Controller
{
    /**
     * @var Application
     */
    protected $app;

    /**
     * @var string
     */
    protected $tplPath;

    /**
     * Set the application class to the controller.
     *
     * @param Base\Application $app
     */
    public function setApplication(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Base render method.
     *
     * @param string $tpl
     * @param array $values
     * @param Symfony\Component\HttpFoundation\Request|null $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    protected function render($tpl, $values = array(), $request = null)
    {
        return $this->app->render($this->tplPath . '/' . $tpl . '.html.twig', $values, $request);
    }
}
