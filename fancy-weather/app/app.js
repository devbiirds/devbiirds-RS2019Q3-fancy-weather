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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Map/maps.js":
/*!************************************!*\
  !*** ./src/components/Map/maps.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateMap; });
function CreateMap(lng, lat) {
// eslint-disable-next-line no-undef
  document.querySelector('.mapsbox__latitude').textContent = `Latitude :${lat}`;
  // eslint-disable-next-line no-undef
  document.querySelector('.mapsbox__longitude').textContent = `Longitude :${lng}`;
  // eslint-disable-next-line no-undef
  mapboxgl.accessToken = 'pk.eyJ1IjoidmFkaW00NHF3ZSIsImEiOiJjazRkN3hxa3UwMDllM2RuOWo1d2h0dmkwIn0.BsvJKILLQ27kjexe1vsXpA';
  let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [lng, lat], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
};

/***/ }),

/***/ "./src/components/Search/items_search.js":
/*!***********************************************!*\
  !*** ./src/components/Search/items_search.js ***!
  \***********************************************/
/*! exports provided: input, submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
const input = document.createElement('input');
const submit = document.createElement('div');



/***/ }),

/***/ "./src/components/Search/search.js":
/*!*****************************************!*\
  !*** ./src/components/Search/search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _controls_controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controls/controls.js */ "./src/controls/controls.js");

class Search {
constructor(_input,_submit){
    this.input = _input;
    this.submit = _submit;
    this.submit.addEventListener('click',()=>{
        this.ReadData();
   })
}

ReadData() {
     _controls_controls_js__WEBPACK_IMPORTED_MODULE_0__["default"].Search(this.input.value);
}
}


/***/ }),

/***/ "./src/components/btn_items.js":
/*!*************************************!*\
  !*** ./src/components/btn_items.js ***!
  \*************************************/
/*! exports provided: changeImage, changeLang, changeTemp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeImage", function() { return changeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLang", function() { return changeLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTemp", function() { return changeTemp; });
const changeTemp = document.createElement('div');
const changeLang = document.createElement('div');
const changeImage = document.createElement('div');



/***/ }),

/***/ "./src/components/generation.js":
/*!**************************************!*\
  !*** ./src/components/generation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Generation; });
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.js */ "./src/components/items.js");
/* harmony import */ var _Search_items_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search/items_search.js */ "./src/components/Search/items_search.js");
/* harmony import */ var _btn_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn_items.js */ "./src/components/btn_items.js");
/* harmony import */ var _controls_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls/controls.js */ "./src/controls/controls.js");
/* harmony import */ var _weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/weather_items.js */ "./src/components/weather/weather_items.js");






function Generation() {
_items_js__WEBPACK_IMPORTED_MODULE_0__["wrapper"].classList.add('wrapper');
document.body.appendChild(_items_js__WEBPACK_IMPORTED_MODULE_0__["wrapper"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["controlsBox"].classList.add('controlsbox');
_items_js__WEBPACK_IMPORTED_MODULE_0__["wrapper"].appendChild(_items_js__WEBPACK_IMPORTED_MODULE_0__["controlsBox"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["tools"].classList.add('tools');
_items_js__WEBPACK_IMPORTED_MODULE_0__["controlsBox"].appendChild(_items_js__WEBPACK_IMPORTED_MODULE_0__["tools"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["search"].classList.add('searchbox');
_Search_items_search_js__WEBPACK_IMPORTED_MODULE_1__["input"].classList.add('searchbox__input');
_Search_items_search_js__WEBPACK_IMPORTED_MODULE_1__["submit"].classList.add('searchbox__submit');
_items_js__WEBPACK_IMPORTED_MODULE_0__["search"].appendChild(_Search_items_search_js__WEBPACK_IMPORTED_MODULE_1__["input"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["search"].appendChild(_Search_items_search_js__WEBPACK_IMPORTED_MODULE_1__["submit"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["controlsBox"].appendChild(_items_js__WEBPACK_IMPORTED_MODULE_0__["search"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["wrapper"].appendChild(_items_js__WEBPACK_IMPORTED_MODULE_0__["mainbox"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["mainbox"].classList.add('mainbox');
_items_js__WEBPACK_IMPORTED_MODULE_0__["mapsbox"].classList.add('mapsbox');
_items_js__WEBPACK_IMPORTED_MODULE_0__["weatherbox"].classList.add('weatherbox');
_items_js__WEBPACK_IMPORTED_MODULE_0__["mainbox"].appendChild(_items_js__WEBPACK_IMPORTED_MODULE_0__["weatherbox"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["mainbox"].appendChild(_items_js__WEBPACK_IMPORTED_MODULE_0__["mapsbox"]);
_btn_items_js__WEBPACK_IMPORTED_MODULE_2__["changeImage"].classList.add('controlsbox__changeimage');
const inChangeImage = document.createElement('div');
inChangeImage.classList.add('controlsbox__changeimage--icon');
_btn_items_js__WEBPACK_IMPORTED_MODULE_2__["changeImage"].appendChild(inChangeImage);
_items_js__WEBPACK_IMPORTED_MODULE_0__["tools"].appendChild(_btn_items_js__WEBPACK_IMPORTED_MODULE_2__["changeImage"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["weather_location"].classList.add('weatherbox__location')
_items_js__WEBPACK_IMPORTED_MODULE_0__["weatherbox"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["weather_location"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["city"].classList.add('weatherbox__location--city');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["country"].classList.add('weatherbox__location--country');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["weather_location"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["city"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["weather_location"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["country"]);
_items_js__WEBPACK_IMPORTED_MODULE_0__["weatherbox"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["date"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["date"].classList.add('weatherbox__date');
_items_js__WEBPACK_IMPORTED_MODULE_0__["weatherbox"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday"].classList.add('weatherbox__mainday');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_temp"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_temp"].classList.add('weatherbox__mainday--temp');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_description"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_description"].classList.add('weatherbox__mainday--description');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_description"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_state"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_state"].classList.add('mainday--description--state');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_description"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_feels"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_feels"].classList.add('mainday--description-feels');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_description"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_wind"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_wind"].classList.add('mainday--description--wind');
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_description"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_humidity"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["mainday_humidity"].classList.add('mainday--description--humidity');
_items_js__WEBPACK_IMPORTED_MODULE_0__["weatherbox"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["daysbox"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["daysbox"].classList.add('weatherbox__daysbox');

_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["daysbox"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1"].classList.add('weatherbox__daysbox--day1')
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1_temp"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1_temp"].classList.add('daysbox--day1--temp')
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1_description"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day1_description"].classList.add('daysbox--day1--description');

_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["daysbox"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2"].classList.add('weatherbox__daysbox--day2')
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2_temp"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2_temp"].classList.add('daysbox--day2--temp')
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2_description"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day2_description"].classList.add('daysbox--day2--description');

_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["daysbox"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3"].classList.add('weatherbox__daysbox--day3')
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3_temp"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3_temp"].classList.add('daysbox--day3--temp')
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3"].appendChild(_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3_description"]);
_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__["day3_description"].classList.add('daysbox--day3--description');

const CoordLon = document.createElement('div');
const CoordLat = document.createElement('div');
CoordLon.classList.add('mapsbox__longitude');
CoordLat.classList.add('mapsbox__latitude');
const maps = document.querySelector('.mapsbox');
maps.appendChild(CoordLat);
maps.appendChild(CoordLon);
}


/***/ }),

/***/ "./src/components/items.js":
/*!*********************************!*\
  !*** ./src/components/items.js ***!
  \*********************************/
/*! exports provided: wrapper, controlsBox, tools, search, mainbox, mapsbox, weatherbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlsBox", function() { return controlsBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainbox", function() { return mainbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapsbox", function() { return mapsbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherbox", function() { return weatherbox; });
const wrapper = document.createElement('div');
const controlsBox = document.createElement('div');
const tools = document.createElement('div');
const search = document.createElement('div');
const mainbox = document.createElement('div');
const mapsbox = document.createElement('div');
const weatherbox = document.createElement('div')



/***/ }),

/***/ "./src/components/weather/weather_items.js":
/*!*************************************************!*\
  !*** ./src/components/weather/weather_items.js ***!
  \*************************************************/
/*! exports provided: weather_location, city, country, date, mainday, day1, day2, day3, day1_temp, day2_temp, day3_temp, day1_description, day2_description, day3_description, mainday_temp, mainday_description, daysbox, mainday_state, mainday_feels, mainday_wind, mainday_humidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weather_location", function() { return weather_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "city", function() { return city; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "country", function() { return country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainday", function() { return mainday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day1", function() { return day1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day2", function() { return day2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day3", function() { return day3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day1_temp", function() { return day1_temp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day2_temp", function() { return day2_temp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day3_temp", function() { return day3_temp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day1_description", function() { return day1_description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day2_description", function() { return day2_description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day3_description", function() { return day3_description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainday_temp", function() { return mainday_temp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainday_description", function() { return mainday_description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysbox", function() { return daysbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainday_state", function() { return mainday_state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainday_feels", function() { return mainday_feels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainday_wind", function() { return mainday_wind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainday_humidity", function() { return mainday_humidity; });
const weather_location = document.createElement('div');
const city = document.createElement('p');
const country = document.createElement('p');
const date = document.createElement('div');
const mainday = document.createElement('div');
const mainday_temp = document.createElement('p');
const mainday_description = document.createElement('p');
const daysbox = document.createElement('div');
const day1 = document.createElement('div');
const day2 = document.createElement('div');
const day3 = document.createElement('div');
const day1_temp = document.createElement('p');
const day2_temp = document.createElement('p');
const day3_temp = document.createElement('p');
const day1_description = document.createElement('p');
const day2_description = document.createElement('p');
const day3_description = document.createElement('p');
const mainday_state = document.createElement('p');
const mainday_feels = document.createElement('p');
const mainday_wind = document.createElement('p');
const mainday_humidity = document.createElement('p');



/***/ }),

/***/ "./src/controls/controls.js":
/*!**********************************!*\
  !*** ./src/controls/controls.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Control; });
/* harmony import */ var _services_http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http.js */ "./src/services/http.js");
/* harmony import */ var _components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/weather/weather_items.js */ "./src/components/weather/weather_items.js");
/* harmony import */ var _ip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ip.js */ "./src/controls/ip.js");
/* harmony import */ var _components_Map_maps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map/maps.js */ "./src/components/Map/maps.js");





class Control {
  static ChangeImage(mainday_state) {
    // eslint-disable-next-line no-undef
    const body = document.querySelector('body');
    const url = `https://api.unsplash.com/photos/random?query=${mainday_state.textContent}&client_id=fd2fd649512ceb8c4c593a0355dec68dba32709b9666d506cd45e95b883efa7e`;
    _services_http_js__WEBPACK_IMPORTED_MODULE_0__["default"].Get(url).then((result) => body.style.background = `url(${result.urls.full})`);
  }

static SetInfoDate(_date,_day1_description,_day2_description,_day3_description){
  var data = new Date();
  var day = {
    dayofweek:"",
    numberday:"",
    month:"",
    hours:"",
    minute:"",
  }

 switch (data.getDay()) {
   case 1:day.dayofweek = "Monday";_day1_description.textContent="Thuesday";_day2_description.textContent="Wednesday";_day3_description.textContent="Thursday";break;
   case 2:day.dayofweek = "Thuesday";_day1_description.textContent="Wednesday";_day2_description.textContent="Thursday";_day3_description.textContent="Friday";break;
   case 3:day.dayofweek = "Wednesday";_day1_description.textContent="Thuesday";_day2_description.textContent="Friday";_day3_description.textContent="Saturday";break;
   case 4:day.dayofweek = "Thursday";_day1_description.textContent="Thuesday";_day2_description.textContent="Friday";_day3_description.textContent="Saturday";break;
   case 5:day.dayofweek = "Friday";_day1_description.textContent="Saturday";_day2_description.textContent="Sunday";_day3_description.textContent="Monday";break;
   case 6:day.dayofweek = "Saturday";_day1_description.textContent="Sunday";_day2_description.textContent="Monday";_day3_description.textContent="Thuesday";break;
   case 0:day.dayofweek = "Sunday";_day1_description.textContent="Monday";_day2_description.textContent="Thuesday";_day3_description.textContent="Wednesday";break;
   
 
   default:
     break;
 }
 switch (data.getMonth()) {
  case 0:day.month = "January";break;
  case 1:day.month = "February";break;
  case 2:day.month = "March";break;
  case 3:day.month = "April";break;
  case 4:day.month = "May";break;
  case 5:day.month = "June";break;
  case 6:day.month = "July";break;
  case 7:day.month = "August";break;
  case 8:day.month = "September";break;
  case 9:day.month = "October";break;
  case 10:day.month = "November";break;
  case 11:day.month = "December";break;
  default:
    break;
}
if(data.getHours() == 0) {
  day.hours = "00";
}
else{
  day.hours = data.getHours();
}
switch (day.minute = data.getMinutes()) {
  case 1:day.minute = "01";break;
  case 2:day.minute = "02";break;
  case 3:day.minute = "03";break;
  case 4:day.minute = "04";break;
  case 5:day.minute = "05";break;
  case 6:day.minute = "06";break;
  case 7:day.minute = "07";break;
  case 8:day.minute = "08";break;
  case 9:day.minute = "09";break;
  

  default:day.minute = data.getMinutes();
    break;
}
 _date.textContent = day.dayofweek+" "+day.numberday + " " + day.month + "  "+day.hours+":"+day.minute;
}
static ChangeLang(btnLang){
btnLang.textContent = 'EN';/**/
btnLang.addEventListener('click',() =>{
  btnLang.textContent = 'RU';

})
}
static ChangeTemp(mainday_temp,day1,day2,day3){

}
static ChangeInfoTemp(json,_city,_country,_date,_mainday_temp,_day1,_day2,_day3,_state,_feels,_wind,_humidity){
  let AverageTemp=0;
let mainDay = {
  weather:"",
  feelslike:0,
  wind:0,
  himidity:0,
};
var dateArray =[];
var AverageTempAll = [];
var prevDate;
var counter = 0;
var flag = true;
_city.textContent = json.city.name;
_country.textContent = json.city.country
console.log(json);
Object(_components_Map_maps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(json.city.coord.lon,json.city.coord.lat);
json.list.forEach(element => {
  if(dateArray.includes(Number(element.dt_txt.slice(8,10)))){ 
  }
  else
  dateArray.push(Number(element.dt_txt.slice(8,10)))
});
json.list.forEach(element => {
 if(dateArray[0] == Number(element.dt_txt.slice(8,10))){
  counter++;
  AverageTemp +=element.main.temp;
  prevDate = Number(element.dt_txt.slice(8,10));
  if(flag){
    mainDay = {weather:element.weather[0].main,feelslike:element.main.feels_like,wind:element.wind.speed,himidity:element.main.humidity};
    flag=!flag;
  }
  }
 if(dateArray[1] == Number(element.dt_txt.slice(8,10))){
  if(prevDate !=dateArray[1]){
    AverageTemp = AverageTemp/counter;
    AverageTempAll.push(Math.round(AverageTemp));
    AverageTemp = 0;
    counter = 0;
    prevDate = Number(element.dt_txt.slice(8,10));
  }
  else{
    counter++;
  AverageTemp +=element.main.temp;
  prevDate = Number(element.dt_txt.slice(8,10));
  }
}
if(dateArray[2] == Number(element.dt_txt.slice(8,10))){
  if(prevDate != dateArray[2]){
    AverageTemp = AverageTemp/counter;
    AverageTempAll.push(Math.round(AverageTemp));
    AverageTemp = 0;
    counter = 0;
    prevDate = Number(element.dt_txt.slice(8,10));
  }
  else{
    counter++;
  AverageTemp +=element.main.temp;
  prevDate = Number(element.dt_txt.slice(8,10));
  }
}
if(dateArray[3] == Number(element.dt_txt.slice(8,10))){
  if(prevDate !=dateArray[3]){
    console.log(prevDate);
    AverageTemp = AverageTemp/counter;
    AverageTempAll.push(Math.round(AverageTemp));
    AverageTemp = 0;
    counter = 0;
    prevDate = Number(element.dt_txt.slice(8,10));
  }
  else{
    counter++;
  AverageTemp +=element.main.temp;
  prevDate = Number(element.dt_txt.slice(8, 10));
  }
}
    });
    AverageTemp = AverageTemp/counter;
    AverageTempAll.push(Math.round(AverageTemp));
    _mainday_temp.textContent = Math.round(AverageTempAll[0] -273,15) + " °C";
    _day1.textContent = Math.round(AverageTempAll[1]-273,15)  + " °C";
    _day2.textContent = Math.round(AverageTempAll[2]-273,15) + " °C";
    _day3.textContent = Math.round(AverageTempAll[3]-273,15) + " °C";
    _state.textContent = mainDay.weather;
      this.ChangeImage(_state);
    _feels.textContent ="Feelslike : " + Math.round(mainDay.feelslike -273,15) + "°C";
    _wind.textContent = "Wind : " +  mainDay.wind + " m/s";
    _humidity.textContent ="Humidity : " + mainDay.himidity + " %";
}
static Search(value){
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&lang=ru&APPID=4d7c525d8bf41c0284921f87d30a3c5e`;
    
    _services_http_js__WEBPACK_IMPORTED_MODULE_0__["default"].Get(url).then(result => Control.ChangeInfoTemp(result,_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["city"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["country"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["date"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day1_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day2_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day3_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_state"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_feels"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_wind"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_humidity"])).then(()=> this.SetInfoDate(_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["date"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day1_description"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day2_description"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day3_description"])).then(()=>{setInterval(() => {
      this.SetInfoDate(_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["date"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day1_description"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day2_description"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day3_description"])
    }, 10000);});
    
}
static Start(){
 
  _ip_js__WEBPACK_IMPORTED_MODULE_2__["default"].GetIP().then(result => result.city).then((result)=>{
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${result}&lang=ru&APPID=4d7c525d8bf41c0284921f87d30a3c5e`;
    _services_http_js__WEBPACK_IMPORTED_MODULE_0__["default"].Get(url).then(result => Control.ChangeInfoTemp(result,_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["city"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["country"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["date"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day1_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day2_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day3_temp"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_state"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_feels"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_wind"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["mainday_humidity"])).then(()=> this.SetInfoDate(_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["date"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day1_description"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day2_description"],_components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_1__["day3_description"]))
  });
  
  
}
}


/***/ }),

/***/ "./src/controls/ip.js":
/*!****************************!*\
  !*** ./src/controls/ip.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IP; });
class IP {
  static GetIP() {
    const url = "http://ipinfo.io?token=a993f39951afab";
    // eslint-disable-next-line no-undef
    return fetch(url).then(this.checkStatus).then((response) => response.json());
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_generation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/generation.js */ "./src/components/generation.js");
/* harmony import */ var _components_Search_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Search/search.js */ "./src/components/Search/search.js");
/* harmony import */ var _controls_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/controls.js */ "./src/controls/controls.js");
/* harmony import */ var _components_Search_items_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components//Search/items_search.js */ "./src/components/Search/items_search.js");
/* harmony import */ var _components_weather_weather_items_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/weather/weather_items.js */ "./src/components/weather/weather_items.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _controls_ip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/ip.js */ "./src/controls/ip.js");







Object(_components_generation_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
_controls_controls_js__WEBPACK_IMPORTED_MODULE_2__["default"].Start();
const search = new _components_Search_search_js__WEBPACK_IMPORTED_MODULE_1__["default"](_components_Search_items_search_js__WEBPACK_IMPORTED_MODULE_3__["input"], _components_Search_items_search_js__WEBPACK_IMPORTED_MODULE_3__["submit"]);
const Tempflag = false;

const newmap = document.createElement('div');
newmap.id = "map";
const maps = document.querySelector('.mapsbox');
maps.appendChild(newmap);

const btnChangeImage = document.querySelector('.controlsbox__changeimage');
const state = document.querySelector('.mainday--description--state');
btnChangeImage.addEventListener('click',() => {
  _controls_controls_js__WEBPACK_IMPORTED_MODULE_2__["default"].ChangeImage(state);
});


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/services/http.js":
/*!******************************!*\
  !*** ./src/services/http.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTTP; });
/* harmony import */ var _controls_controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/controls.js */ "./src/controls/controls.js");

class HTTP{
    constructor(){

    }
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
  
     static Get(url) {
         
          return fetch(url).then(this.checkStatus).then((response) => response.json());
        }
      
    
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map