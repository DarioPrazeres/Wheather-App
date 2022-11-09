import cityInformation from './cityData.json';
import dataJson from './model.json';

export {showTemp, cityData, realTemperature, dailyData};


/**
 * 
 * 
 * //
 * const daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.coord.lat}&lon=${cityData.coord.lon.toFixed()}&exclude=weekly&appid=${key}`, {mode: 'cors'});
    ///const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, {mode: 'cors'});
 */

const cityData = cityInformation;//await response.json();
const dailyData = dataJson; //await daily.json();

var realTemperature = parseInt(cityData.main.feels_like, 10);

function showTemp(){
    return parseInt(cityData.main.feels_like, 10);
}


