import HTTP from './http.js';
import {weather_location,city,country,date,mainday,day1,day2,day3,mainday_temp,mainday_description} from '../components/weather/weather_items.js';
export default class Control {

  ChangeImage(/**тут будет глобальный объект окна */) {

}
static ParseJson(json){
  }
static ChangeLang(btnLang){
btnLang.textContent = 'EN';/**/
}
static ChangeTemp(){
  
}
static ChangeInfoTemp(json,_city,_country,_date,_mainday_temp,_day1,_day2,_day3){
  let AverageTemp=0;
let mainDay = {
  weather:"",
  feelslike:0,
  wind:0,
  himidity:0,
}
var dateArray =[];
var AverageTempAll = [];
var prevDate;
var counter = 0;
var flag = true;
_city.textContent = json.city.name;
_country.textContent = json.city.country
console.log(json.city.coord);
json.list.forEach(element => {
  if(dateArray.includes(Number(element.dt_txt.slice(8,10)))){ 
  }
  else
  dateArray.push(Number(element.dt_txt.slice(8,10)))
});
console.log(dateArray);
json.list.forEach(element => {
 if(dateArray[0] == Number(element.dt_txt.slice(8,10))){
  console.log(element.main.temp)
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
    console.log('work');
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
    console.log('average main ' + AverageTempAll[0]);
    _mainday_temp.textContent = AverageTempAll[0] + " °F";
    day1.textContent = AverageTempAll[1] + " °F";
    day2.textContent = AverageTempAll[2] + " °F";
    day3.textContent = AverageTempAll[3] + " °F";

    
}
static Search(value){/*формируем http запрос*/
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=4d7c525d8bf41c0284921f87d30a3c5e`;
   
    HTTP.Get(url).then(result => Control.ChangeInfoTemp(result,city,country,date,mainday_temp,day1,day2,day3));
}
}
