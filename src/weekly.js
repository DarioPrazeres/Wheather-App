import { cityData, dailyData } from "./modules/apiCity";
import dayOfWeek from "./modules/dayOfWeek";
import mouthOfYear from "./modules/mouthOfYear";
import cloudStatus from "./modules/cloudStatus";
import converterWeather from "./modules/converterWeather";

const dateTemp = document.querySelectorAll('h4.dateTemp');
const tempStatus = document.querySelectorAll('div.tempStatus-1');
const tempMax = document.querySelectorAll('h4.tempMax');
const tempMin = document.querySelectorAll('h4.tempMin');

console.log(dailyData);

function weekTimeline() {
    var today = new Date();

    var k=1;
    var incremetDay = 0;
    var dayOfMouth = today.getUTCDate() + incremetDay;
    var day = today.getDay();
    for (let j = 0; j < 5; j++) { 
        dayOfMouth = today.getUTCDate() + incremetDay;
        console.log(k)
        if (day + k <= 6) {
            dateTemp[j].innerText = dayOfWeek(day + k) +', ' + dayOfMouth + ' ' + mouthOfYear(today.getMonth());
        } else {
            k=0
            dateTemp[j].innerText = dayOfWeek(k) +', ' + dayOfMouth + ' ' + mouthOfYear(today.getMonth());
            day = 0;
        }
        incremetDay++
        k++;
    }


}
function weatherDaily(unity){
    var count = 1;
    for (let j = 0; j < 5; j++) { 
        tempStatus[j].appendChild(cloudStatus(dailyData.daily[count].weather[0].main, 'tempStatus'));
        tempMax[j].innerHTML = converterWeather((dailyData.daily[count].temp.max).toFixed(), unity);
        tempMin[j].innerHTML = converterWeather((dailyData.daily[count].temp.min).toFixed(0), unity);

        count++;
    }
}
export { weekTimeline, weatherDaily };