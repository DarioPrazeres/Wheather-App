import converterWeather from "./converterWeather";
import headCity from "../head";
//import { cityData, realTemperature, dailyData } from "./apiCity";
import humidityShow from "./humidity";
import showAir from "./air";
import showVisibility from "./visibility";
import { weatherDaily, weekTimeline, showTempMaxMin } from "../weekly";
import windShow from "./wind";
//import { dailyData } from "./apiCity";


const buttonCelsius = document.getElementById('unity-1');
const buttonFahrenheit = document.getElementById('unity-2');
const buttonKelvin = document.getElementById('unity-3');

//Key Of API
var key = 'a4ad64410595a2036d013339142d4684';
var cityData = 0;
var dailyData = 0;
var unity = 'Celsius';

async function weatherUnity(city) {
    /**-----------Api Init------------- */
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, { mode: 'cors' });
        cityData = await response.json();
        const daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.coord.lat}&lon=${cityData.coord.lon.toFixed()}&exclude=weekly&appid=${key}`, { mode: 'cors' });
      
        console.log(cityData);
        dailyData = await daily.json();
        var realTemperature = parseInt(cityData.main.feels_like, 10);
        console.log(dailyData);
    } catch (error) {
        alert('Error! Verify your Connection or City Not Found!')
    }

    /**-------Initialization of Functions----------- */
    var humidityValue = cityData.main.humidity;
    weekTimeline();
    headCity(cityData.name, cityData.weather[0].main, converterWeather(realTemperature, unity));
    humidityShow(humidityValue);
    showAir(cityData.main.pressure);
    showVisibility(cityData.visibility / 1000);
    maxMinShow();
    showStatus();
    windShow(cityData.wind.speed ,cityData.wind.deg)

    buttonCelsius.addEventListener('click', () => {
        buttonFahrenheit.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonCelsius.classList.add('btn-active');
        unity = 'Celsius';
        headCity(cityData.name, cityData.weather[0].main, converterWeather(realTemperature, unity));
        maxMinShow();
    });
    buttonFahrenheit.addEventListener('click', () => {
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonFahrenheit.classList.add('btn-active');
        unity = 'Fahrenheit';
        headCity(cityData.name, cityData.weather[0].main, converterWeather(realTemperature, unity));
        maxMinShow();
    });
    buttonKelvin.addEventListener('click', () => {
        buttonFahrenheit.classList.remove('btn-active');
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.add('btn-active');
        unity = 'Kelvin';
        headCity(cityData.name, cityData.weather[0].main, converterWeather(realTemperature, unity));
        maxMinShow();
    });
}

function maxMinShow(){
    var count = 1;
    for (let j = 0; j < 5; j++) { 
        showTempMaxMin(unity, dailyData.daily[count].temp.max, dailyData.daily[count].temp.min, j);
        count++;
    }
}
function showStatus(){
    var count = 1;
    for (let j = 0; j < 5; j++) { 
        weatherDaily(dailyData.daily[count].weather[0].main, j);
        count++;
    }
}
export { weatherUnity };