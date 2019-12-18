import  {wrapper,controlsBox,tools,search,mainbox,mapsbox,weatherbox} from './items.js'
import {input,submit} from './Search/items_search.js';
import {changeImage,changeLang,changeTemp} from './btn_items.js';
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
changeTemp.classList.add('controlsbox__changetemp');
tools.appendChild(changeImage);
tools.appendChild(changeLang);
tools.appendChild(changeTemp);
}