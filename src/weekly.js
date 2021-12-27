import {divTemp, showRain, dayOfWeek} from './print';
export default weekDatta;
const weekly = document.querySelector('div.weekly');
function weekDatta(temMax, temMin, rainP_1, day, statusTemp){
    weekly.appendChild(weekGeneral(temMax, temMin, rainP_1, day, statusTemp));       
}
function weekGeneral(temMax, temMin, rainP_1, day, statusTemp){
    const week = document.createElement('div');
    week.classList.add('week');
    week.appendChild(divTemp(temMax, temMin, statusTemp)); 
    week.appendChild(showRain(rainP_1));
    week.appendChild(dayOfWeek(day));
    return week
}