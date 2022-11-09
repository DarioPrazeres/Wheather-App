import changeBack from './changeBackground.js';
import weekDatta from './weekly';
import hourDatta from './hourly.js';
import moreDatta from './moreInfo';
import headCity from './head';
import dataJson from './modules/model.json';
import cityInformation from './modules/cityData.json';
import converterWeather from './modules/converterWeather.js';
//Key Of API
var key = 'a4ad64410595a2036d013339142d4684';
/**
 * 
 * 
 * //const daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.coord.lat}&lon=${cityData.coord.lon.toFixed()}&exclude=weekly&appid=${key}`, {mode: 'cors'});
    ///const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, {mode: 'cors'});
 */
async function apiFunction(city){
  
    const cityData = cityInformation; //await response.json();

    console.log(cityData);
    const daily_1 = dataJson; //await daily.json();
    var realTemperature = parseInt(cityData.main.feels_like, 10);
    console.log('Temperatura:'+ realTemperature)
    console.log(daily_1);
    console.log(converterWeather(realTemperature));
    //headCity(cityData.name, cityData.weather[0].main,converterWeather(realTemperature));
    console.log('weather:'+ cityData.weather[0].main)
    console.log('Discriprio'+cityData.weather[0].description);
    /*
    for(let cont = 0; cont < 7; cont++){
      weekDatta(parseInt(daily_1.daily[cont].temp.max/10, 10), parseInt(daily_1.daily[cont].temp.min/10, 10), daily_1.daily[cont].clouds, cont, daily_1.daily[cont].weather[0].main);
    }
    for(let cont = 0; cont < 24; cont++){
      hourDatta(parseInt(daily_1.hourly[cont].temp/10, 10), daily_1.hourly[cont].clouds, cont, daily_1.hourly[cont].weather[0].main);
      //moreDatta(daily_1.hourly[cont].humidity, parseInt(daily_1.hourly[cont].wind_speed/10, 10), cont);
    }
    for(let cont = 0; cont < 24; cont++){
      moreDatta(daily_1.hourly[cont].humidity, parseInt(daily_1.hourly[cont].wind_speed, 10), cont);
    }
    */
    
}



export default apiFunction;