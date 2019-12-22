import HTTP from '../services/http.js';
import { weather_location, city, country, date, mainday, day1, day2, day3, day1_temp, day2_temp, day3_temp, day1_description, day2_description, day3_description, mainday_temp, mainday_description, daysbox, mainday_state, mainday_feels, mainday_wind, mainday_humidity} from '../components/weather/weather_items.js';
import IP from './ip.js';
import CreateMap from '../components/Map/maps.js';

export default class Control {
  static ChangeImage(mainday_state) {
    // eslint-disable-next-line no-undef
    const body = document.querySelector('body');
    const url = `https://api.unsplash.com/photos/random?query=${mainday_state.textContent}&client_id=fd2fd649512ceb8c4c593a0355dec68dba32709b9666d506cd45e95b883efa7e`;
    HTTP.Get(url).then((result) => body.style.background = `url(${result.urls.full})`);
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
CreateMap(json.city.coord.lon,json.city.coord.lat);
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
    
    HTTP.Get(url).then(result => Control.ChangeInfoTemp(result,city,country,date,mainday_temp,day1_temp,day2_temp,day3_temp,mainday_state,mainday_feels,mainday_wind,mainday_humidity)).then(()=> this.SetInfoDate(date,day1_description,day2_description,day3_description)).then(()=>{setInterval(() => {
      this.SetInfoDate(date,day1_description,day2_description,day3_description)
    }, 10000);});
    
}
static Start(){
 
  IP.GetIP().then(result => result.city).then((result)=>{
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${result}&lang=ru&APPID=4d7c525d8bf41c0284921f87d30a3c5e`;
    HTTP.Get(url).then(result => Control.ChangeInfoTemp(result,city,country,date,mainday_temp,day1_temp,day2_temp,day3_temp,mainday_state,mainday_feels,mainday_wind,mainday_humidity)).then(()=> this.SetInfoDate(date,day1_description,day2_description,day3_description))
  });
  
  
}
}
