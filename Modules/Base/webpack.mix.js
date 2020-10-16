const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copy('public', '../../public/Modules/Base')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
                '$bundle': path.resolve(__dirname, '../../Bundle'),
                '$user': path.resolve(__dirname, '../User/resources/js'),
                '$constant': path.resolve(__dirname, '../Setting/Constant/resources/js'),
                '$language': path.resolve(__dirname, '../Setting/Language/resources/js'),
            }
        },
        // module: {
        //     rules: [
        //         {
        //             test: /\.css$/i,
        //             // loader: 'css-loader',
        //             // use: ['css-loader'],
        //             use: ['vue-style-loader', 'style-loader', 'css-loader'],
        //             include: [
        //                 path.resolve(__dirname, "resources/js/App.vue")
        //             ],
        //             // options: {
        //             //     esModule: true,
        //             // }
        //         },
        //     ],
        // },
    })

