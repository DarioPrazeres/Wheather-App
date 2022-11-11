import  cloudStatus  from './print';
import dayOfWeek from './modules/dayOfWeek';
import mouthOfYear from './modules/mouthOfYear';
import sourceLocation from './icon/location.png';

const status = document.querySelector('div.status');
const cityTitle = document.createElement('h5');
const dateTitle = document.createElement('h5');
const statusCity = document.createElement('div');
const tempCity = document.createElement('h1');
const sky = document.createElement('h3');
const location = document.createElement('div');
const iconLocation = document.createElement('img');

iconLocation.src = sourceLocation;
//var status = 'few clouds';
function headCity(city, status, temp) {    
    createElem();
    statusCity.appendChild(cloudStatus(status, 'image_10'));
    statusCity.appendChild(tempCity); 
    cityTitle.innerHTML = city;
    tempCity.innerHTML = `${temp}`;    
    sky.innerHTML = `${status}`
}
function createElem() {
    statusCity.innerHTML = '';

    cityTitle.classList.add('city');
    dateTitle.classList.add('date');
    statusCity.classList.add('statusCity');
    tempCity.classList.add('tempCity');
    sky.classList.add('sky');    
    location.classList.add('location');
           
    status.appendChild(statusCity);
    status.appendChild(sky);
    status.appendChild(dateTitle);
    status.appendChild(location);

    location.appendChild(iconLocation);
    location.appendChild(cityTitle);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    dateTitle.innerHTML = dayOfWeek(today.getDay()) + ', ' + today.getUTCDate() + ' '+ mouthOfYear(today.getMonth()) + ' ' + h + ":" + m;
    var t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

export default headCity;