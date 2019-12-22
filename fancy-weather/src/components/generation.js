import  {wrapper,controlsBox,tools,search,mainbox,mapsbox,weatherbox} from './items.js'
import {input,submit} from './Search/items_search.js';
import {changeImage,changeLang,changeTemp} from './btn_items.js';
import Control from '../controls/controls.js';
import {weather_location,city,country,date,mainday,day1,day2,day3,day1_temp,day2_temp,day3_temp,day1_description,day2_description,day3_description,mainday_temp,mainday_description,daysbox,mainday_state,mainday_feels,mainday_wind,mainday_humidity} from './weather/weather_items.js';

export default function Generation() {
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
controlsBox.classList.add('controlsbox');
wrapper.appendChild(controlsBox);
tools.classList.add('tools');
controlsBox.appendChild(tools);
search.classList.add('searchbox');
input.classList.add('searchbox__input');
submit.classList.add('searchbox__submit');
search.appendChild(input);
search.appendChild(submit);
controlsBox.appendChild(search);
wrapper.appendChild(mainbox);
mainbox.classList.add('mainbox');
mapsbox.classList.add('mapsbox');
weatherbox.classList.add('weatherbox');
mainbox.appendChild(weatherbox);
mainbox.appendChild(mapsbox);
changeImage.classList.add('controlsbox__changeimage');
const inChangeImage = document.createElement('div');
inChangeImage.classList.add('controlsbox__changeimage--icon');
changeImage.appendChild(inChangeImage);
tools.appendChild(changeImage);
weather_location.classList.add('weatherbox__location')
weatherbox.appendChild(weather_location);
city.classList.add('weatherbox__location--city');
country.classList.add('weatherbox__location--country');
weather_location.appendChild(city);
weather_location.appendChild(country);
weatherbox.appendChild(date);
date.classList.add('weatherbox__date');
weatherbox.appendChild(mainday);
mainday.classList.add('weatherbox__mainday');
mainday.appendChild(mainday_temp);
mainday_temp.classList.add('weatherbox__mainday--temp');
mainday.appendChild(mainday_description);
mainday_description.classList.add('weatherbox__mainday--description');
mainday_description.appendChild(mainday_state);
mainday_state.classList.add('mainday--description--state');
mainday_description.appendChild(mainday_feels);
mainday_feels.classList.add('mainday--description-feels');
mainday_description.appendChild(mainday_wind);
mainday_wind.classList.add('mainday--description--wind');
mainday_description.appendChild(mainday_humidity);
mainday_humidity.classList.add('mainday--description--humidity');
weatherbox.appendChild(daysbox);
daysbox.classList.add('weatherbox__daysbox');

daysbox.appendChild(day1);
day1.classList.add('weatherbox__daysbox--day1')
day1.appendChild(day1_temp);
day1_temp.classList.add('daysbox--day1--temp')
day1.appendChild(day1_description);
day1_description.classList.add('daysbox--day1--description');

daysbox.appendChild(day2);
day2.classList.add('weatherbox__daysbox--day2')
day2.appendChild(day2_temp);
day2_temp.classList.add('daysbox--day2--temp')
day2.appendChild(day2_description);
day2_description.classList.add('daysbox--day2--description');

daysbox.appendChild(day3);
day3.classList.add('weatherbox__daysbox--day3')
day3.appendChild(day3_temp);
day3_temp.classList.add('daysbox--day3--temp')
day3.appendChild(day3_description);
day3_description.classList.add('daysbox--day3--description');

const CoordLon = document.createElement('div');
const CoordLat = document.createElement('div');
CoordLon.classList.add('mapsbox__longitude');
CoordLat.classList.add('mapsbox__latitude');
const maps = document.querySelector('.mapsbox');
maps.appendChild(CoordLat);
maps.appendChild(CoordLon);
}
