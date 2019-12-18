import HTTP from './http.js';
export default class Control {

  ChangeImage(/**тут будет глобальный объект окна */) {

}

static ChangeLang(btnLang){
btnLang.textContent = 'EN';/**/
}
ChangeTemp(/* тут будет изменение формата представления температуры*/){

}
static ChangeInfoTemp(json){
console.log(json.list[0].weather);
}
static Search(value){/*формируем http запрос*/
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=4d7c525d8bf41c0284921f87d30a3c5e`;
   
    HTTP.Get(url);
}
}
