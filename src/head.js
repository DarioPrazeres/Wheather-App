import {mouthOfYear, dayWeek, dayOf, mouth, dM, hourFull, hour, cloudStatus} from './print';
const status = document.querySelector('div.status');

const cityTitle = document.createElement('h3');
const dateTitle = document.createElement('h4');
const statusCity = document.createElement('div');
const tempCity = document.createElement('h1');
const sky = document.createElement('h2');


//var status = 'few clouds';
function headCity(city, status, temp) {
    createElem();
    cityTitle.innerHTML = city;
    tempCity.innerHTML = `${temp} °c`;
    dateTitle.innerHTML = `${dayWeek(dayOf)}, ${dM} of ${mouthOfYear(mouth)}, ${hour}:${hourFull}`
    statusCity.appendChild(cloudStatus(status, 'image_10'));
    sky.innerHTML = `${status}`
}
function createElem(){
    statusCity.innerHTML = '';
    cityTitle.classList.add('city');
    dateTitle.classList.add('date');
    statusCity.classList.add('statusCity');
    tempCity.classList.add('tempCity');
    sky.classList.add('sky');
    status.appendChild(cityTitle);
    status.appendChild(dateTitle);
    status.appendChild(statusCity);
    status.appendChild(sky);
    statusCity.appendChild(tempCity);
}
export default headCity;