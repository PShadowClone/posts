<?php

namespace Post\App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class PostServiceProvider extends ServiceProvider
{

    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Post\App\Http\Controllers';

    public function boot()
    {
        parent::boot();
        //public packages resources
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'Post');
        //public packages migrations
        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');
        // load package's translation files
        $this->loadTranslationsFrom(__DIR__ . '/../../resources/lang', 'Post');
        // public package's configurations
        $this->publishes([
            __DIR__ . '/../../config/Post.php' => config_path('Post.php'),
        ]);
        // public package's seeders
        $this->registerSeedsFrom(__DIR__ . '/../../database/seeds');

        $this->map();

    }


    public function register()
    {

    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        $this->mapMobileRoutes();
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('Modules/Post/routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('Modules/Post/routes/api.php'));
    }

    /**
     * Define the "mobile" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapMobileRoutes()
    {
        Route::prefix('api/v1')
            ->namespace($this->namespace)
            ->group(base_path('Modules/Post/routes/mobile.php'));
    }

    /**
     * register seeders
     *
     * @param $path
     */
    protected function registerSeedsFrom($path)
    {
        foreach (glob("$path/*.php") as $filename) {
            include $filename;
            $classes = get_declared_classes();
            $class = end($classes);

            $command = Request::server('argv', null);
            if (is_array($command)) {
                $command = implode(' ', $command);
                if ($command == "artisan db:seed") {
                    Artisan::call('db:seed', ['--class' => $class]);
                }
            }

        }
    }
}