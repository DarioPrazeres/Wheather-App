import changeBack from './changeBackground.js';
import weekDatta from './weekly';
import hourDatta from './hourly.js';
import moreDatta from './moreInfo';
import headCity from './head';

var key = 'a4ad64410595a2036d013339142d4684';
async function apiFunction(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, {mode: 'cors'});
    const cityData = await response.json();
    
    const daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.coord.lat}&lon=${cityData.coord.lon.toFixed()}&exclude=weekly&appid=${key}`, {mode: 'cors'});
    const daily_1 = await daily.json();

    headCity(cityData.name, cityData.weather[0].main, parseInt(cityData.main.feels_like/10, 10));
    changeBack(cityData.weather[0].main);
    
    console.log(daily_1);
    console.log(cityData.weather[0].description);
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
    
    
}
//dataCenter_1.innerHTML += ` A temperatura maxima do dia ${cont} é ${parseInt(daily_1.daily[cont].temp.max/10, 10)} e ${parseInt(daily_1.daily[cont].temp.min/10)}, humanity: ${(daily_1.daily[cont].humidity)}%, Cloud:${parseInt(daily_1.daily[cont].clouds)}%, Wind Speed:${parseInt(daily_1.daily[cont].wind_speed)} <br>`;
/*for(let cont = 0; cont < 24; cont++){
      hourDatta(parseInt(daily_1.hourly[cont].temp/10, 10), daily_1.hourly[cont].clouds, cont, daily_1.hourly[cont].weather[0].description);
      //moreDatta(daily_1.hourly[cont].humidity, parseInt(daily_1.hourly[cont].wind_speed/10, 10), cont);
    }
    for(let cont = 0; cont < 24; cont++){
      moreDatta(daily_1.hourly[cont].humidity, parseInt(daily_1.hourly[cont].wind_speed/10, 10), cont);
    }
     */
export default apiFunction;