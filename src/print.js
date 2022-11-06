import cloudDay from  "./icon/cloudy-day.svg";
import sun from  "./icon/sun.svg";
import rainy from  "./icon/rainy.svg";
import snow from  "./icon/snow.svg";
import moon from  "./icon/moon.svg";
import cloudNight from   "./icon/cloudy-night.svg";
import umbrellaIcon from "./icon/umbrella.png";
import windIcon from "./icon/wind.svg";
import humidityicon from "./icon/humidity.svg";
import mist from "./icon/mist.svg";
export {divTemp, showRain, showHum,  showWind, dayOfWeek, mouthOfYear, hour,  dayWeek, dayOf, mouth, dM, hourFull, cloudStatus};

const data = new Date();
const hour = data.getHours();
const mouth = data.getMonth();
const dayOf = data.getDay();
const dM = data.getUTCDate();
const hourFull = data.getMinutes();
function divTemp(temMax, temMin, statusTemp){
    const temp = document.createElement('div');
    temp.classList.add("temp");
    temp.appendChild(cloudStatus(statusTemp, 'image'));
    temp.appendChild(showTemp(temMax, temMin));
    return temp;
}
function cloudStatus(statusTemp, classli){
    const cloud = document.createElement('img');
    cloud.classList.add(classli);
    if(hour >= 5 && hour < 18){
        switch(statusTemp){
            case 'Clear': cloud.src = sun; break;
            case 'Clouds': cloud.src = cloudDay; break;  
            case 'Rain': cloud.src = rainy; break;
            case 'Snow': cloud.src = snow; break;
            case 'Mist': cloud.src = mist; break;
        }
    }else{
        switch(statusTemp){
            case 'Clear': cloud.src = moon; break;
            case 'Clouds': cloud.src = cloudNight; break; 
            case 'Rain': cloud.src = rainy ; break;
            case 'Snow': cloud.src = snow; break;
            case 'Mist': cloud.src = mist; break;
        }
    }
    return cloud;
}
function showTemp(temMax, temMin){
    const sTemp = document.createElement('div');
    const tempMax = document.createElement('h4');
    const tempMin = document.createElement('h5');
    tempMax.innerHTML = `${temMax} °c`;
    tempMin.innerHTML = `${temMin-1} °c`;
    tempMax.classList.add('temp-max');
    tempMin.classList.add('temp-min');
    sTemp.appendChild(tempMax);
    sTemp.appendChild(tempMin);
    sTemp.classList.add('showTemp');
    return sTemp;
}
function showRain(rainP){
    const rain = document.createElement('div');
    const rainPercent = document.createElement('h4');
    rain.classList.add('rain');
    rainPercent.classList.add('rainPercent');
    rainPercent.innerHTML = `${rainP}%`;
    rain.appendChild(percentRain());
    rain.appendChild(rainPercent);
    return rain;
}
function percentRain(){
    const umbrella = document.createElement('img');
    umbrella.src = umbrellaIcon;
    umbrella.classList.add('image');
    return umbrella;
}
function showHum(rainP){
    const humi = document.createElement('div');
    const humiPercent = document.createElement('h4');
    humi.classList.add('huminity');
    humiPercent.classList.add('rainPercent');
    humiPercent.innerHTML = `${rainP}%`;
    humi.appendChild(humidity());
    humi.appendChild(humiPercent);
    return humi;
}
function humidity(){
    const hum = document.createElement('img');
    hum.src = humidityicon;
    hum.classList.add('image');
    return hum;
}
function showWind(rainP){
    const windDiv = document.createElement('div');
    const windPercent = document.createElement('h4');
    windDiv.classList.add('wind');
    windPercent.classList.add('rainPercent');
    windPercent.innerHTML = `${rainP}m/s`;
    windDiv.appendChild(wind());
    windDiv.appendChild(windPercent);
    return windDiv;
}
function wind(){
    const wind = document.createElement('img');
    wind.src = windIcon;
    wind.classList.add('image');
    return wind;
}
function dayOfWeek(day){
    const title = document.createElement('h4');
    title.classList.add('hour');
    title.innerHTML = `${dayWeek(day)}`;
    return title;
}
function dayWeek(number){
    var nameOfDay = '';
    switch(number){
        case 0: nameOfDay = 'Sun'; break;
        case 1: nameOfDay = 'Mon'; break;
        case 2: nameOfDay = 'Tues'; break;
        case 3: nameOfDay = 'Wed'; break;
        case 4: nameOfDay = 'Thu'; break;
        case 5: nameOfDay = 'Fri'; break;
        case 6: nameOfDay = 'Sat'; break;
    }
    return nameOfDay;
}
function mouthOfYear(number) {
    var nameOfMouth = ' January';
    switch(number){
        case 0: nameOfMouth = 'January'; break;
        case 1: nameOfMouth = 'February'; break;
        case 2: nameOfMouth = 'March'; break;
        case 3: nameOfMouth = 'April'; break;
        case 4: nameOfMouth = 'May'; break;
        case 5: nameOfMouth = 'June'; break;
        case 6: nameOfMouth = 'July'; break;
        case 7: nameOfMouth = 'August'; break;
        case 8: nameOfMouth = 'September'; break;
        case 9: nameOfMouth = 'October'; break;
        case 10: nameOfMouth = 'November'; break;
        case 11: nameOfMouth = 'December'; break;
    }
    return nameOfMouth;
}
