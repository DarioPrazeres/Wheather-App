import search from './modules/search';
import displayForm from './modules/hiddenElement';
import './style.css';
import {weatherUnity} from './modules/weatherInit';

const gpsButton = document.querySelector('button.btn-gps');
var key = 'a4ad64410595a2036d013339142d4684';
var city = 'Luanda';

weatherUnity(city);
displayForm();
search();
/**--------------GPS Function-------------------- */
gpsButton.addEventListener('click', ()=>{
    navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
})
 const  sucessCallback = async (position) =>{
    const daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude.toFixed(4)}&lon=${position.coords.longitude.toFixed(3)}&exclude=weekly&appid=${key}`, { mode: 'cors' });
    const dataDay = await daily.json();
    const timeZone = (dataDay.timezone).split('/');
    weatherUnity(timeZone[1]);
}
const errorCallback = (error)=>{
    console.log(error);
}