import { cityData, dailyData } from "./modules/apiCity";
import dayOfWeek from "./modules/dayOfWeek";
import mouthOfYear from "./modules/mouthOfYear";
import cloudStatus from "./modules/cloudStatus";
import converterWeather from "./modules/converterWeather";

const dateTemp = document.querySelectorAll('h4.dateTemp');
const tempStatus = document.querySelectorAll('div.tempStatus-1');
const tempMax = document.querySelectorAll('h4.tempMax');
const tempMin = document.querySelectorAll('h4.tempMin');

function weekTimeline() {

    var today = new Date();
    var k = 1;
    var incremetDay = 1;
    var dayOfMouth = today.getUTCDate() + incremetDay;
    var day = today.getDay();

    for (let j = 0; j < 5; j++) {
        dayOfMouth = today.getUTCDate() + incremetDay;
        console.log(k)
        if (day + k <= 6) {
            dateTemp[j].innerText = dayOfWeek(day + k) + ', ' + dayOfMouth + ' ' + mouthOfYear(today.getMonth());
        } else {
            k = 0
            dateTemp[j].innerText = dayOfWeek(k) + ', ' + dayOfMouth + ' ' + mouthOfYear(today.getMonth());
            day = 0;
        }
        incremetDay++
        k++;
    }


}
function weatherDaily(status, count) {
    tempStatus[count].innerHTML = ' ';
    tempStatus[count].appendChild(cloudStatus(status, 'tempStatus'));
}
function showTempMaxMin(unity, tMax, tMin, count) {
    console.log(unity)
    tempMax[count].innerHTML = converterWeather(tMax.toFixed(), unity);
    tempMin[count].innerHTML = converterWeather(tMin.toFixed() - 1, unity);
}
export { weekTimeline, weatherDaily, showTempMaxMin };