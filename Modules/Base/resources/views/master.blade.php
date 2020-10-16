<!doctype html>
<html lang="en">
<head><!--begin::Base Path (base relative path for assets of this page) -->
    <meta charset="utf-8"/>

    <title>{{config('app.name')}} | Dashboard</title>
    <meta name="description" content="Updates and statistics">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!--begin::Fonts -->
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700">
    <link href="{{asset('Modules/Base')}}/assets/plugins/global/plugins.bundle.css" rel="stylesheet"/>

    <!--end::Fonts -->
{{--    <script src="{{asset('Modules/Base')}}/assets/template/languages.js"></script>--}}

<!--begin::Page Vendors Styles(used by this page) -->
{{--    <link href="{{asset('Modules/Base')}}/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet"--}}
{{--          type="text/css"/>--}}
<!--end::Page Vendors Styles -->
{{--    @if(app()->getLocale() == 'ar')--}}
{{--        <link href="{{asset('Modules/Base')}}/assets/template/css/style.rtl.css" rel="stylesheet" type="text/css">--}}
{{--    @else--}}
{{--        <link href="{{asset('Modules/Base')}}/assets/template/css/style.ltr.css" rel="stylesheet" type="text/css">--}}
{{--@endif--}}

<!--begin::Global Theme Styles(used by all pages) -->
{{--    <link href="{{asset('Modules/Base')}}/assets/vendors/global/vendors.bundle.css" rel="stylesheet" type="text/css"/>--}}
{{--    <link href="{{asset('Modules/Base')}}/assets/css/demo1/style.bundle.css" rel="stylesheet" type="text/css"/>--}}
<!--end::Global Theme Styles -->

    <!--begin::Layout Skins(used by all pages) -->

{{--    <link href="{{asset('Modules/Base')}}/assets/css/demo1/skins/header/base/light.css" rel="stylesheet"--}}
{{--          type="text/css"/>--}}
{{--    <link href="{{asset('Modules/Base')}}/assets/css/demo1/skins/header/menu/light.css" rel="stylesheet"--}}
{{--          type="text/css"/>--}}
{{--    <link href="{{asset('Modules/Base')}}/assets/css/demo1/skins/brand/dark.css" rel="stylesheet" type="text/css"/>--}}
{{--    <link href="{{asset('Modules/Base')}}/assets/css/demo1/skins/aside/dark.css" rel="stylesheet" type="text/css"/>--}}
<!--end::Layout Skins -->
    <!-- BIND WITH GLOBAL BASE JS STARTS -->
    <link rel="stylesheet" type="text/css" href="{{asset('Modules/Base/css/app.css')}}"/>
    <!-- BIND WITH GLOBAL BASE JS ENDS -->
    <link rel="shortcut icon" href="{{asset('Modules/Base')}}/assets/media/logos/favicon.ico"/>
</head>
<body
        class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
<div id="app"></div>
<!--ENd:: Chat-->
<script>
    var KTAppOptions = {
        "colors": {
            "state": {
                "brand": "#5d78ff",
                "dark": "#282a3c",
                "light": "#ffffff",
                "primary": "#5867dd",
                "success": "#34bfa3",
                "info": "#36a3f7",
                "warning": "#ffb822",
                "danger": "#fd3995"
            },
            "base": {
                "label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
                "shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
            }
        }
    };
</script>
<!-- end::Global Config -->


<!--begin::Global Theme Bundle(used by all pages) -->
<script src="{{asset('Modules/Base')}}/assets/vendors/global/vendors.bundle.js" type="text/javascript"></script>
<script src="{{asset('Modules/Base')}}/assets/js/demo1/scripts.bundle.js" type="text/javascript"></script>
{{--<script src="{{asset('Modules/Base')}}/assets/plugins/global/plugins.bundle.js" type="text/javascript"></script>--}}
<!--end::Global Theme Bundle -->
<!-- BIND WITH GLOBAL BASE JS STARTS -->
<script src="{{asset('Modules/Base/js/app.js')}}"></script>
<!-- BIND WITH GLOBAL BASE JS ENDS -->
</body>
</html>
