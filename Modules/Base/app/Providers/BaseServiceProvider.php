<?php

namespace Base\App\Providers;

use App\Exceptions\Handler;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class BaseServiceProvider extends ServiceProvider
{

    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Base\App\Http\Controllers';
    /**
     * list of package's helpers
     * @author Amr
     * @var array
     */
    protected $helpers = [
        'Constants'
    ];

    public function boot()
    {
        parent::boot();
        //public packages resources
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'Base');
        //public packages migrations
        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');
        // load package's translation files
        $this->loadTranslationsFrom(__DIR__ . '/../../resources/lang', 'Base');
        // public package's configurations
        $this->publishes([
            __DIR__ . '/../../config/Base.php' => config_path('Base.php'),
        ]);
        Route::pattern('id', '[0-9]+');
        $this->bindPackageException();

    }


    public function register()
    {

        $this->registerServiceProvider();
        $this->registerHelpers();
    }

    /**
     * bind package's exception
     * @author Amr
     */
    function bindPackageException()
    {
        $this->app->bind(Handler::class, \Base\App\Exceptions\Handler::class);
    }

    /**
     * register package's helpers
     * @author Amr
     */
    function registerHelpers()
    {
        foreach ($this->helpers as $helper) {
            $helper_path = __DIR__ . '/../Helpers/' . $helper . '.php';
            if (File::isFile($helper_path)) {
                require_once $helper_path;
            }
        }
    }

    /**
     * register modules service providers
     * @author Amr
     */
    public function registerServiceProvider()
    {
        $this->app->register(MacroServiceProvider::class);
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
            ->group(base_path('Modules/Base/routes/web.php'));
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
            ->group(base_path('Modules/Base/routes/api.php'));
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
        Route::prefix('v1')
            ->namespace($this->namespace)
            ->group(base_path('Modules/Base/routes/mobile.php'));
    }
}