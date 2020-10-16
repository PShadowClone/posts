/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/theme/pages/components/charts/flotcharts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/theme/pages/components/charts/flotcharts.js":
/*!********************************************************************!*\
  !*** ../src/assets/js/theme/pages/components/charts/flotcharts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTFlotchartsDemo = function() {\r\n\r\n\t// Private functions\r\n\r\n\tvar demo1 = function() {\r\n\t\tvar data = [];\r\n\t\tvar totalPoints = 250;\r\n\r\n\t\t// random data generator for plot charts\r\n\r\n\t\tfunction getRandomData() {\r\n\t\t\tif (data.length > 0) data = data.slice(1);\r\n\t\t\t// do a random walk\r\n\t\t\twhile (data.length < totalPoints) {\r\n\t\t\t\tvar prev = data.length > 0 ? data[data.length - 1] : 50;\r\n\t\t\t\tvar y = prev + Math.random() * 10 - 5;\r\n\t\t\t\tif (y < 0) y = 0;\r\n\t\t\t\tif (y > 100) y = 100;\r\n\t\t\t\tdata.push(y);\r\n\t\t\t}\r\n\t\t\t// zip the generated y values with the x values\r\n\t\t\tvar res = [];\r\n\t\t\tfor (var i = 0; i < data.length; ++i) {\r\n\t\t\t\tres.push([i, data[i]]);\r\n\t\t\t}\r\n\r\n\t\t\treturn res;\r\n\t\t}\r\n\r\n\t\tvar d1 = [];\r\n\t\tfor (var i = 0; i < Math.PI * 2; i += 0.25)\r\n\t\t\td1.push([i, Math.sin(i)]);\r\n\r\n\t\tvar d2 = [];\r\n\t\tfor (var i = 0; i < Math.PI * 2; i += 0.25)\r\n\t\t\td2.push([i, Math.cos(i)]);\r\n\r\n\t\tvar d3 = [];\r\n\t\tfor (var i = 0; i < Math.PI * 2; i += 0.1)\r\n\t\t\td3.push([i, Math.tan(i)]);\r\n\r\n\t\t$.plot($(\"#kt_flotcharts_1\"), [{\r\n\t\t\tlabel: \"sin(x)\",\r\n\t\t\tdata: d1,\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\t\t}, {\r\n\t\t\tlabel: \"cos(x)\",\r\n\t\t\tdata: d2,\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\t\t}, {\r\n\t\t\tlabel: \"tan(x)\",\r\n\t\t\tdata: d3,\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\t\t}], {\r\n\t\t\tcolors: [KTApp.getStateColor(\"success\"), KTApp.getStateColor(\"brand\"), KTApp.getStateColor(\"danger\")],\r\n\t\t\tseries: {\r\n\t\t\t\tlines: {\r\n\t\t\t\t\tshow: true,\r\n\t\t\t\t},\r\n\t\t\t\tpoints: {\r\n\t\t\t\t\tshow: true,\r\n\t\t\t\t\tfill: true,\r\n\t\t\t\t\tradius: 3,\r\n\t\t\t\t\tlineWidth: 1\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\txaxis: {\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\tticks: [0, [Math.PI / 2, \"\\u03c0/2\"],\r\n\t\t\t\t\t[Math.PI, \"\\u03c0\"],\r\n\t\t\t\t\t[Math.PI * 3 / 2, \"3\\u03c0/2\"],\r\n\t\t\t\t\t[Math.PI * 2, \"2\\u03c0\"]\r\n\t\t\t\t]\r\n\t\t\t},\r\n\t\t\tyaxis: {\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\tticks: 10,\r\n\t\t\t\tmin: -2,\r\n\t\t\t\tmax: 2\r\n\t\t\t},\r\n\t\t\tgrid: {\r\n\t\t\t\tborderColor: \"#eee\",\r\n\t\t\t\tborderWidth: 1\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo2 = function() {\r\n\t\tfunction randValue() {\r\n\t\t\treturn (Math.floor(Math.random() * (1 + 40 - 20))) + 20;\r\n\t\t}\r\n\t\tvar pageviews = [\r\n\t\t\t[1, randValue()],\r\n\t\t\t[2, randValue()],\r\n\t\t\t[3, 2 + randValue()],\r\n\t\t\t[4, 3 + randValue()],\r\n\t\t\t[5, 5 + randValue()],\r\n\t\t\t[6, 10 + randValue()],\r\n\t\t\t[7, 15 + randValue()],\r\n\t\t\t[8, 20 + randValue()],\r\n\t\t\t[9, 25 + randValue()],\r\n\t\t\t[10, 30 + randValue()],\r\n\t\t\t[11, 35 + randValue()],\r\n\t\t\t[12, 25 + randValue()],\r\n\t\t\t[13, 15 + randValue()],\r\n\t\t\t[14, 20 + randValue()],\r\n\t\t\t[15, 45 + randValue()],\r\n\t\t\t[16, 50 + randValue()],\r\n\t\t\t[17, 65 + randValue()],\r\n\t\t\t[18, 70 + randValue()],\r\n\t\t\t[19, 85 + randValue()],\r\n\t\t\t[20, 80 + randValue()],\r\n\t\t\t[21, 75 + randValue()],\r\n\t\t\t[22, 80 + randValue()],\r\n\t\t\t[23, 75 + randValue()],\r\n\t\t\t[24, 70 + randValue()],\r\n\t\t\t[25, 65 + randValue()],\r\n\t\t\t[26, 75 + randValue()],\r\n\t\t\t[27, 80 + randValue()],\r\n\t\t\t[28, 85 + randValue()],\r\n\t\t\t[29, 90 + randValue()],\r\n\t\t\t[30, 95 + randValue()]\r\n\t\t];\r\n\t\tvar visitors = [\r\n\t\t\t[1, randValue() - 5],\r\n\t\t\t[2, randValue() - 5],\r\n\t\t\t[3, randValue() - 5],\r\n\t\t\t[4, 6 + randValue()],\r\n\t\t\t[5, 5 + randValue()],\r\n\t\t\t[6, 20 + randValue()],\r\n\t\t\t[7, 25 + randValue()],\r\n\t\t\t[8, 36 + randValue()],\r\n\t\t\t[9, 26 + randValue()],\r\n\t\t\t[10, 38 + randValue()],\r\n\t\t\t[11, 39 + randValue()],\r\n\t\t\t[12, 50 + randValue()],\r\n\t\t\t[13, 51 + randValue()],\r\n\t\t\t[14, 12 + randValue()],\r\n\t\t\t[15, 13 + randValue()],\r\n\t\t\t[16, 14 + randValue()],\r\n\t\t\t[17, 15 + randValue()],\r\n\t\t\t[18, 15 + randValue()],\r\n\t\t\t[19, 16 + randValue()],\r\n\t\t\t[20, 17 + randValue()],\r\n\t\t\t[21, 18 + randValue()],\r\n\t\t\t[22, 19 + randValue()],\r\n\t\t\t[23, 20 + randValue()],\r\n\t\t\t[24, 21 + randValue()],\r\n\t\t\t[25, 14 + randValue()],\r\n\t\t\t[26, 24 + randValue()],\r\n\t\t\t[27, 25 + randValue()],\r\n\t\t\t[28, 26 + randValue()],\r\n\t\t\t[29, 27 + randValue()],\r\n\t\t\t[30, 31 + randValue()]\r\n\t\t];\r\n\r\n\t\tvar plot = $.plot($(\"#kt_flotcharts_2\"), [{\r\n\t\t\tdata: pageviews,\r\n\t\t\tlabel: \"Unique Visits\",\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\r\n\t\t}, {\r\n\t\t\tdata: visitors,\r\n\t\t\tlabel: \"Page Views\",\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\t\t}], {\r\n\t\t\tseries: {\r\n\t\t\t\tlines: {\r\n\t\t\t\t\tshow: true,\r\n\t\t\t\t\tlineWidth: 2,\r\n\t\t\t\t\tfill: true,\r\n\t\t\t\t\tfillColor: {\r\n\t\t\t\t\t\tcolors: [{\r\n\t\t\t\t\t\t\topacity: 0.05\r\n\t\t\t\t\t\t}, {\r\n\t\t\t\t\t\t\topacity: 0.01\r\n\t\t\t\t\t\t}]\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tpoints: {\r\n\t\t\t\t\tshow: true,\r\n\t\t\t\t\tradius: 3,\r\n\t\t\t\t\tlineWidth: 1\r\n\t\t\t\t},\r\n\t\t\t\tshadowSize: 2\r\n\t\t\t},\r\n\t\t\tgrid: {\r\n\t\t\t\thoverable: true,\r\n\t\t\t\tclickable: true,\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\tborderColor: \"#eee\",\r\n\t\t\t\tborderWidth: 1\r\n\t\t\t},\r\n\t\t\tcolors: [KTApp.getStateColor(\"brand\"), KTApp.getStateColor(\"danger\")],\r\n\t\t\txaxis: {\r\n\t\t\t\tticks: 11,\r\n\t\t\t\ttickDecimals: 0,\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t},\r\n\t\t\tyaxis: {\r\n\t\t\t\tticks: 11,\r\n\t\t\t\ttickDecimals: 0,\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tfunction showTooltip(x, y, contents) {\r\n\t\t\t$('<div id=\"tooltip\">' + contents + '</div>').css({\r\n\t\t\t\tposition: 'absolute',\r\n\t\t\t\tdisplay: 'none',\r\n\t\t\t\ttop: y + 5,\r\n\t\t\t\tleft: x + 15,\r\n\t\t\t\tborder: '1px solid #333',\r\n\t\t\t\tpadding: '4px',\r\n\t\t\t\tcolor: '#fff',\r\n\t\t\t\t'border-radius': '3px',\r\n\t\t\t\t'background-color': '#333',\r\n\t\t\t\topacity: 0.80\r\n\t\t\t}).appendTo(\"body\").fadeIn(200);\r\n\t\t}\r\n\r\n\t\tvar previousPoint = null;\r\n\t\t$(\"#chart_2\").bind(\"plothover\", function(event, pos, item) {\r\n\t\t\t$(\"#x\").text(pos.x.toFixed(2));\r\n\t\t\t$(\"#y\").text(pos.y.toFixed(2));\r\n\r\n\t\t\tif (item) {\r\n\t\t\t\tif (previousPoint != item.dataIndex) {\r\n\t\t\t\t\tpreviousPoint = item.dataIndex;\r\n\r\n\t\t\t\t\t$(\"#tooltip\").remove();\r\n\t\t\t\t\tvar x = item.datapoint[0].toFixed(2),\r\n\t\t\t\t\t\ty = item.datapoint[1].toFixed(2);\r\n\r\n\t\t\t\t\tshowTooltip(item.pageX, item.pageY, item.series.label + \" of \" + x + \" = \" + y);\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\t$(\"#tooltip\").remove();\r\n\t\t\t\tpreviousPoint = null;\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo3 = function() {\r\n\t\tvar sin = [],\r\n\t\t\tcos = [];\r\n\t\tfor (var i = 0; i < 14; i += 0.1) {\r\n\t\t\tsin.push([i, Math.sin(i)]);\r\n\t\t\tcos.push([i, Math.cos(i)]);\r\n\t\t}\r\n\r\n\t\tvar plot = $.plot($(\"#kt_flotcharts_3\"), [{\r\n\t\t\tdata: sin,\r\n\t\t\tlabel: \"sin(x) = -0.00\",\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\t\t}, {\r\n\t\t\tdata: cos,\r\n\t\t\tlabel: \"cos(x) = -0.00\",\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\t\t}], {\r\n\t\t\tcolors: [KTApp.getStateColor(\"brand\"), KTApp.getStateColor(\"warning\")],\r\n\t\t\tseries: {\r\n\t\t\t\tlines: {\r\n\t\t\t\t\tshow: true\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tcrosshair: {\r\n\t\t\t\tmode: \"x\"\r\n\t\t\t},\r\n\t\t\tgrid: {\r\n\t\t\t\thoverable: true,\r\n\t\t\t\tautoHighlight: false,\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\tborderColor: \"#eee\",\r\n\t\t\t\tborderWidth: 1\r\n\t\t\t},\r\n\t\t\tyaxis: {\r\n\t\t\t\tmin: -1.2,\r\n\t\t\t\tmax: 1.2\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tvar legends = $(\"#kt_flotcharts_3 .legendLabel\");\r\n\t\tlegends.each(function() {\r\n\t\t\t// fix the widths so they don't jump around\r\n\t\t\t$(this).css('width', $(this).width());\r\n\t\t});\r\n\r\n\t\tvar updateLegendTimeout = null;\r\n\t\tvar latestPosition = null;\r\n\r\n\t\tfunction updateLegend() {\r\n\t\t\tupdateLegendTimeout = null;\r\n\r\n\t\t\tvar pos = latestPosition;\r\n\r\n\t\t\tvar axes = plot.getAxes();\r\n\t\t\tif (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;\r\n\r\n\t\t\tvar i, j, dataset = plot.getData();\r\n\t\t\tfor (i = 0; i < dataset.length; ++i) {\r\n\t\t\t\tvar series = dataset[i];\r\n\r\n\t\t\t\t// find the nearest points, x-wise\r\n\t\t\t\tfor (j = 0; j < series.data.length; ++j)\r\n\t\t\t\t\tif (series.data[j][0] > pos.x) break;\r\n\r\n\t\t\t\t// now interpolate\r\n\t\t\t\tvar y, p1 = series.data[j - 1],\r\n\t\t\t\t\tp2 = series.data[j];\r\n\r\n\t\t\t\tif (p1 == null) y = p2[1];\r\n\t\t\t\telse if (p2 == null) y = p1[1];\r\n\t\t\t\telse y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);\r\n\r\n\t\t\t\tlegends.eq(i).text(series.label.replace(/=.*/, \"= \" + y.toFixed(2)));\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t$(\"#kt_flotcharts_3\").bind(\"plothover\", function(event, pos, item) {\r\n\t\t\tlatestPosition = pos;\r\n\t\t\tif (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo4 = function() {\r\n\t\tvar data = [];\r\n\t\tvar totalPoints = 250;\r\n\r\n\t\t// random data generator for plot charts\r\n\r\n\t\tfunction getRandomData() {\r\n\t\t\tif (data.length > 0) data = data.slice(1);\r\n\t\t\t// do a random walk\r\n\t\t\twhile (data.length < totalPoints) {\r\n\t\t\t\tvar prev = data.length > 0 ? data[data.length - 1] : 50;\r\n\t\t\t\tvar y = prev + Math.random() * 10 - 5;\r\n\t\t\t\tif (y < 0) y = 0;\r\n\t\t\t\tif (y > 100) y = 100;\r\n\t\t\t\tdata.push(y);\r\n\t\t\t}\r\n\t\t\t// zip the generated y values with the x values\r\n\t\t\tvar res = [];\r\n\t\t\tfor (var i = 0; i < data.length; ++i) {\r\n\t\t\t\tres.push([i, data[i]]);\r\n\t\t\t}\r\n\r\n\t\t\treturn res;\r\n\t\t}\r\n\r\n\t\t//server load\r\n\t\tvar options = {\r\n\t\t\tcolors: [KTApp.getStateColor(\"danger\"), KTApp.getStateColor(\"brand\")],\r\n\t\t\tseries: {\r\n\t\t\t\tshadowSize: 1\r\n\t\t\t},\r\n\t\t\tlines: {\r\n\t\t\t\tshow: true,\r\n\t\t\t\tlineWidth: 0.5,\r\n\t\t\t\tfill: true,\r\n\t\t\t\tfillColor: {\r\n\t\t\t\t\tcolors: [{\r\n\t\t\t\t\t\topacity: 0.1\r\n\t\t\t\t\t}, {\r\n\t\t\t\t\t\topacity: 1\r\n\t\t\t\t\t}]\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tyaxis: {\r\n\t\t\t\tmin: 0,\r\n\t\t\t\tmax: 100,\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\ttickFormatter: function(v) {\r\n\t\t\t\t\treturn v + \"%\";\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\txaxis: {\r\n\t\t\t\tshow: false,\r\n\t\t\t},\r\n\t\t\tcolors: [KTApp.getStateColor(\"brand\")],\r\n\t\t\tgrid: {\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\tborderWidth: 0,\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tvar updateInterval = 30;\r\n\t\tvar plot = $.plot($(\"#kt_flotcharts_4\"), [getRandomData()], options);\r\n\r\n\t\tfunction update() {\r\n\t\t\tplot.setData([getRandomData()]);\r\n\t\t\tplot.draw();\r\n\t\t\tsetTimeout(update, updateInterval);\r\n\t\t}\r\n\r\n\t\tupdate();\r\n\t}\r\n\r\n\tvar demo5 = function() {\r\n\t\tvar d1 = [];\r\n\t\tfor (var i = 0; i <= 10; i += 1)\r\n\t\t\td1.push([i, parseInt(Math.random() * 30)]);\r\n\r\n\t\tvar d2 = [];\r\n\t\tfor (var i = 0; i <= 10; i += 1)\r\n\t\t\td2.push([i, parseInt(Math.random() * 30)]);\r\n\r\n\t\tvar d3 = [];\r\n\t\tfor (var i = 0; i <= 10; i += 1)\r\n\t\t\td3.push([i, parseInt(Math.random() * 30)]);\r\n\r\n\t\tvar stack = 0,\r\n\t\t\tbars = true,\r\n\t\t\tlines = false,\r\n\t\t\tsteps = false;\r\n\r\n\t\tfunction plotWithOptions() {\r\n\t\t\t$.plot($(\"#kt_flotcharts_5\"),\r\n\r\n\t\t\t\t[{\r\n\t\t\t\t\tlabel: \"sales\",\r\n\t\t\t\t\tdata: d1,\r\n\t\t\t\t\tlines: {\r\n\t\t\t\t\t\tlineWidth: 1,\r\n\t\t\t\t\t},\r\n\t\t\t\t\tshadowSize: 0\r\n\t\t\t\t}, {\r\n\t\t\t\t\tlabel: \"tax\",\r\n\t\t\t\t\tdata: d2,\r\n\t\t\t\t\tlines: {\r\n\t\t\t\t\t\tlineWidth: 1,\r\n\t\t\t\t\t},\r\n\t\t\t\t\tshadowSize: 0\r\n\t\t\t\t}, {\r\n\t\t\t\t\tlabel: \"profit\",\r\n\t\t\t\t\tdata: d3,\r\n\t\t\t\t\tlines: {\r\n\t\t\t\t\t\tlineWidth: 1,\r\n\t\t\t\t\t},\r\n\t\t\t\t\tshadowSize: 0\r\n\t\t\t\t}], {\r\n\t\t\t\t\tcolors: [KTApp.getStateColor(\"danger\"), KTApp.getStateColor(\"brand\")],\r\n\t\t\t\t\tseries: {\r\n\t\t\t\t\t\tstack: stack,\r\n\t\t\t\t\t\tlines: {\r\n\t\t\t\t\t\t\tshow: lines,\r\n\t\t\t\t\t\t\tfill: true,\r\n\t\t\t\t\t\t\tsteps: steps,\r\n\t\t\t\t\t\t\tlineWidth: 0, // in pixels\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\tbars: {\r\n\t\t\t\t\t\t\tshow: bars,\r\n\t\t\t\t\t\t\tbarWidth: 0.5,\r\n\t\t\t\t\t\t\tlineWidth: 0, // in pixels\r\n\t\t\t\t\t\t\tshadowSize: 0,\r\n\t\t\t\t\t\t\talign: 'center'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\tgrid: {\r\n\t\t\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\t\t\tborderColor: \"#eee\",\r\n\t\t\t\t\t\tborderWidth: 1\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t);\r\n\t\t}\r\n\r\n\t\t$(\".stackControls input\").click(function(e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tstack = $(this).val() == \"With stacking\" ? true : null;\r\n\t\t\tplotWithOptions();\r\n\t\t});\r\n\r\n\t\t$(\".graphControls input\").click(function(e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tbars = $(this).val().indexOf(\"Bars\") != -1;\r\n\t\t\tlines = $(this).val().indexOf(\"Lines\") != -1;\r\n\t\t\tsteps = $(this).val().indexOf(\"steps\") != -1;\r\n\t\t\tplotWithOptions();\r\n\t\t});\r\n\r\n\t\tplotWithOptions();\r\n\t}\r\n\r\n\tvar demo6 = function() {\r\n\t\t// bar chart:\r\n\t\tvar data = GenerateSeries(0);\r\n\r\n\t\tfunction GenerateSeries(added) {\r\n\t\t\tvar data = [];\r\n\t\t\tvar start = 100 + added;\r\n\t\t\tvar end = 200 + added;\r\n\r\n\t\t\tfor (var i = 1; i <= 20; i++) {\r\n\t\t\t\tvar d = Math.floor(Math.random() * (end - start + 1) + start);\r\n\t\t\t\tdata.push([i, d]);\r\n\t\t\t\tstart++;\r\n\t\t\t\tend++;\r\n\t\t\t}\r\n\r\n\t\t\treturn data;\r\n\t\t}\r\n\r\n\t\tvar options = {\r\n\t\t\tcolors: [KTApp.getStateColor(\"success\"), KTApp.getStateColor(\"brand\")],\r\n\t\t\tseries: {\r\n\t\t\t\tbars: {\r\n\t\t\t\t\tshow: true\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tbars: {\r\n\t\t\t\tbarWidth: 0.8,\r\n\t\t\t\tlineWidth: 0, // in pixels\r\n\t\t\t\tshadowSize: 0,\r\n\t\t\t\talign: 'left'\r\n\t\t\t},\r\n\r\n\t\t\tgrid: {\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\tborderColor: \"#eee\",\r\n\t\t\t\tborderWidth: 1\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t$.plot($(\"#kt_flotcharts_6\"), [{\r\n\t\t\tdata: data,\r\n\t\t\tlines: {\r\n\t\t\t\tlineWidth: 1,\r\n\t\t\t},\r\n\t\t\tshadowSize: 0\r\n\t\t}], options);\r\n\t}\r\n\r\n\tvar demo7 = function() {\r\n\t\t// horizontal bar chart:\r\n\r\n\t\tvar data1 = [\r\n\t\t\t[10, 10],\r\n\t\t\t[20, 20],\r\n\t\t\t[30, 30],\r\n\t\t\t[40, 40],\r\n\t\t\t[50, 50]\r\n\t\t];\r\n\r\n\t\tvar options = {\r\n\t\t\tcolors: [KTApp.getStateColor(\"brand\")],\r\n\t\t\tseries: {\r\n\t\t\t\tbars: {\r\n\t\t\t\t\tshow: true\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tbars: {\r\n\t\t\t\thorizontal: true,\r\n\t\t\t\tbarWidth: 6,\r\n\t\t\t\tlineWidth: 0, // in pixels\r\n\t\t\t\tshadowSize: 0,\r\n\t\t\t\talign: 'left'\r\n\t\t\t},\r\n\t\t\tgrid: {\r\n\t\t\t\ttickColor: \"#eee\",\r\n\t\t\t\tborderColor: \"#eee\",\r\n\t\t\t\tborderWidth: 1\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t$.plot($(\"#kt_flotcharts_7\"), [data1], options);\r\n\t}\r\n\r\n\tvar demo8 = function() {\r\n\t\tvar data = [\r\n            {label: \"CSS\", data: 10, color:  KTApp.getStateColor(\"brand\")},\r\n            {label: \"HTML5\", data: 40, color:  KTApp.getStateColor(\"success\")},\r\n            {label: \"PHP\", data: 30, color:  KTApp.getStateColor(\"danger\")},\r\n            {label: \"Angular\", data: 20, color:  KTApp.getStateColor(\"warning\")}\r\n        ];\r\n\r\n\t\t$.plot($(\"#kt_flotcharts_8\"), data, {\r\n\t\t\tseries: {\r\n\t\t\t\tpie: {\r\n\t\t\t\t\tshow: true\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo9 = function() {\r\n\t\tvar data = [\r\n            {label: \"USA\", data: 10, color:  KTApp.getStateColor(\"brand\")},\r\n            {label: \"Germany\", data: 25, color:  KTApp.getStateColor(\"success\")},\r\n            {label: \"Norway\", data: 30, color:  KTApp.getStateColor(\"danger\")},\r\n            {label: \"Malaysia\", data: 15, color:  KTApp.getStateColor(\"warning\")},\r\n            {label: \"France\", data: 10, color:  KTApp.getStateColor(\"info\")}\r\n        ];\r\n\r\n\t\t$.plot($(\"#kt_flotcharts_9\"), data, {\r\n\t\t\tseries: {\r\n\t\t\t\tpie: {\r\n\t\t\t\t\tshow: true\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tlegend: {\r\n\t\t\t\tshow: false\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo10 = function() {\r\n\t\tvar data = [\r\n            {label: \"Google\", data: 20, color:  KTApp.getStateColor(\"brand\")},\r\n            {label: \"Twitter\", data: 35, color:  KTApp.getStateColor(\"success\")},\r\n            {label: \"Linkedin\", data: 20, color:  KTApp.getStateColor(\"danger\")},\r\n            {label: \"Instagram\", data: 25, color:  KTApp.getStateColor(\"warning\")},\r\n            {label: \"Facebook\", data: 10, color:  KTApp.getStateColor(\"info\")}\r\n        ];\r\n\r\n\t\t$.plot($(\"#kt_flotcharts_10\"), data, {\r\n\t\t\tseries: {\r\n\t\t\t\tpie: {\r\n\t\t\t\t\tshow: true,\r\n\t\t\t\t\tradius: 1,\r\n\t\t\t\t\tlabel: {\r\n\t\t\t\t\t\tshow: true,\r\n\t\t\t\t\t\tradius: 1,\r\n\t\t\t\t\t\tformatter: function(label, series) {\r\n\t\t\t\t\t\t\treturn '<div style=\"font-size:8pt;text-align:center;padding:2px;color:white;\">' + label + '<br/>' + Math.round(series.percent) + '%</div>';\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\tbackground: {\r\n\t\t\t\t\t\t\topacity: 0.8\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tlegend: {\r\n\t\t\t\tshow: false\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo11 = function() {\r\n\t\tvar data = [\r\n            {label: \"Vue\", data: 13, color:  KTApp.getStateColor(\"danger\")},\r\n            {label: \"Angular\", data: 25, color:  KTApp.getStateColor(\"success\")},\r\n            {label: \"React\", data: 15, color:  KTApp.getStateColor(\"brand\")},\r\n            {label: \"Ember\", data: 10, color:  KTApp.getStateColor(\"warning\")},\r\n            {label: \"Backbone\", data: 8, color:  KTApp.getStateColor(\"info\")}\r\n        ];\r\n\r\n\t\t$.plot($(\"#kt_flotcharts_11\"), data, {\r\n\t\t\tseries: {\r\n\t\t\t\tpie: {\r\n\t\t\t\t\tshow: true,\r\n\t\t\t\t\tradius: 1,\r\n\t\t\t\t\tlabel: {\r\n\t\t\t\t\t\tshow: true,\r\n\t\t\t\t\t\tradius: 1,\r\n\t\t\t\t\t\tformatter: function(label, series) {\r\n\t\t\t\t\t\t\treturn '<div style=\"font-size:8pt;text-align:center;padding:2px;color:white;\">' + label + '<br/>' + Math.round(series.percent) + '%</div>';\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\tbackground: {\r\n\t\t\t\t\t\t\topacity: 0.8\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tlegend: {\r\n\t\t\t\tshow: false\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function() {\r\n\t\t\t// default charts\r\n\t\t\tdemo1();\r\n\t\t\tdemo2();\r\n\t\t\tdemo3();\r\n\t\t\tdemo4();\r\n\t\t\tdemo5();\r\n\t\t\tdemo6();\r\n\t\t\tdemo7();\r\n\r\n\t\t\t// pie charts\r\n\t\t\tdemo8();\r\n\t\t\tdemo9();\r\n\t\t\tdemo10();\r\n\t\t\tdemo11();\r\n\t\t}\r\n\t};\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n\tKTFlotchartsDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/theme/pages/components/charts/flotcharts.js?");

/***/ })

/******/ });