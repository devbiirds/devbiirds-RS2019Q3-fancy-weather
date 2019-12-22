import Generation from './components/generation.js';
import Search from './components/Search/search.js';
import Control from './controls/controls.js';
import { input, submit } from './components//Search/items_search.js';
import {mainday_temp,day2_temp, day3_temp, day1_temp} from './components/weather/weather_items.js';
import './scss/main.scss';
import IP from './controls/ip.js';
Generation();
Control.Start();
const search = new Search(input, submit);
const Tempflag = false;

const newmap = document.createElement('div');
newmap.id = "map";
const maps = document.querySelector('.mapsbox');
maps.appendChild(newmap);

const btnChangeImage = document.querySelector('.controlsbox__changeimage');
const state = document.querySelector('.mainday--description--state');
btnChangeImage.addEventListener('click',() => {
  Control.ChangeImage(state);
});
