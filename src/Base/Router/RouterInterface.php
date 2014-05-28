<?php
namespace Base\Router;

use Base\Application;

interface RouterInterface
{
	/** @param Application $app */
    public function load(Application $app);
}
