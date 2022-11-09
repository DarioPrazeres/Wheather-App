import converterWeather from "./converterWeather";
import headCity from "../head";
import { cityData, realTemperature } from "./apiCity";
import humidityShow from "./humidity";
import showAir from "./air";
import showVisibility from "./visibility";
import { weatherDaily } from "../weekly";


const buttonCelsius = document.getElementById('unity-1');
const buttonFahrenheit = document.getElementById('unity-2');
const buttonKelvin = document.getElementById('unity-3');

var unity = 'Celsius'; 
var humidityValue = cityData.main.humidity;

console.log(cityData);
console.log(converterWeather(realTemperature, unity));

headCity(cityData.name, cityData.weather[0].main, converterWeather(realTemperature, unity));
humidityShow(humidityValue);
showAir(cityData.main.pressure);
showVisibility(cityData.visibility/1000);


function weatherUnity(){
    buttonCelsius.addEventListener('click', ()=>{
        buttonFahrenheit.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonCelsius.classList.add('btn-active');
        unity = 'Celsius';
        headCity(cityData.name, cityData.weather[0].main, converterWeather(realTemperature, unity));
    });
    buttonFahrenheit.addEventListener('click', ()=>{
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonFahrenheit.classList.add('btn-active');
        unity = 'Fahrenheit';
        headCity(cityData.name, cityData.weather[0].main,converterWeather(realTemperature, unity));
    });
    buttonKelvin.addEventListener('click', ()=>{
        buttonFahrenheit.classList.remove('btn-active');
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.add('btn-active');
        unity = 'Kelvin';
        headCity(cityData.name, cityData.weather[0].main,converterWeather(realTemperature, unity));
    });
}
export { weatherUnity, unity};