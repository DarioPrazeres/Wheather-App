import {showHum,  showWind} from './print';
export default moreDatta;
const divMore = document.querySelector('div.containerInfo');
const data = new Date();
//const hour = data.getHours();

function moreDatta(hum, wind, hour) {
    console.log('I am moredatta');
    divMore.appendChild(moreInfo(hum, wind, hour)); 
}
function moreInfo(hum, wind, hour){
    const hour_1 = document.createElement('div');
    hour_1.classList.add('more-1');
    hour_1.appendChild(showHum(hum));
    hour_1.appendChild(showWind(wind));
    hour_1.appendChild(showHour(hour));
    return hour_1;
}
function showHour(hour){
    const title = document.createElement('h4');
    title.classList.add('hour');
    title.innerHTML = `${hour}h`;
    return title;
}

/**/