import {showRain, cloudStatus} from './print';
export default hourDatta;
const hourLy = document.querySelector('div.containerSky');
const data = new Date();
const hour = data.getHours();
function hourDatta(temMax, rainP_1, hour_0, statusTemp){
    console.log('I am Houly Datta!');
    hourLy.appendChild(hourN(temMax, rainP_1, hour_0, statusTemp));       
}
function hourN(temMax, rainP_1, hour_0, statusTemp){
    const hour_1 = document.createElement('div');
    hour_1.classList.add('hour-1');
    hour_1.appendChild(hourGeneral(temMax,rainP_1,  hour_0, statusTemp));
    return hour_1;
}
function hourGeneral(temMax, rainP_1, hour_1, statusTemp){
    const hour = document.createElement('div');
    hour.classList.add('hourSky');
    hour.appendChild(divTemp(temMax, statusTemp)); 
    hour.appendChild(showRain(rainP_1));
    hour.appendChild(showHour(hour_1));
    return hour
}
function showHour(hour){
    const title = document.createElement('h4');
    title.classList.add('hour');
    title.innerHTML = `${hour}h`;
    return title;
}
function divTemp(temMax, statusTemp, mode){
    const temp = document.createElement('div');
    temp.classList.add("temp");
    temp.appendChild(cloudStatus(statusTemp, 'image'));
    temp.appendChild(showTemp(temMax));
    return temp;
}
function showTemp(temMax){
    const sTemp = document.createElement('div');
    const tempMax = document.createElement('h4');
    tempMax.innerHTML = `${temMax} °c`;
    tempMax.classList.add('temp-max');
    sTemp.appendChild(tempMax);
    sTemp.classList.add('showTemp');
    return sTemp;
}