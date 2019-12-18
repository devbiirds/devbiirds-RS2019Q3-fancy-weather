import  {wrapper,controlsBox,tools,search,mainbox,mapsbox,weatherbox} from './items.js'
import {input,submit} from './Search/items_search.js';
import {changeImage,changeLang,changeTemp} from './btn_items.js';
import Control from '../controls/controls.js';
import {weather_location,city,country,date,mainday,day1,day2,day3,mainday_temp,mainday_description,daysbox} from './weather/weather_items.js';

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
changeLang.classList.add('controlsbox__changelang');
const inChangeLang = document.createElement('p');
inChangeLang.classList.add('controlsbox__changelang--lang');
Control.ChangeLang(inChangeLang);
changeLang.appendChild(inChangeLang);

changeTemp.classList.add('controlsbox__changetemp');
tools.appendChild(changeImage);
tools.appendChild(changeLang);
tools.appendChild(changeTemp);
weather_location.classList.add('weatherbox__location')
weatherbox.appendChild(weather_location);
city.classList.add('weatherbox__location--city');
country.classList.add('weatherbox__location--country');
weather_location.appendChild(city);
weather_location.appendChild(country);

weatherbox.appendChild(mainday);
mainday.classList.add('weatherbox__mainday');
console.log(mainday_temp);
mainday.appendChild(mainday_temp);
mainday_temp.classList.add('weatherbox__mainday--temp');
mainday.appendChild(mainday_description);
mainday_description.classList.add('weatherbox__mainday--description');

weatherbox.appendChild(daysbox);
daysbox.classList.add('weatherbox__daysbox');
daysbox.appendChild(day1);
day1.classList.add('weatherbox__daysbox--day1')
daysbox.appendChild(day2);
day2.classList.add('weatherbox__daysbox--day2')
daysbox.appendChild(day3);
day3.classList.add('weatherbox__daysbox--day3')
}
