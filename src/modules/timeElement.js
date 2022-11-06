import  dayOfWeek from "../modules/dayOfWeek";
import mouthOfYear  from "../modules/mouthOfYear";

const elementDate = document.querySelector('h5.date');

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    elementDate.innerHTML = dayOfWeek(today.getDay()) + ', ' + today.getUTCDate() + ' '+ mouthOfYear(today.getMonth()) + ' ' + h + ":" + m;
    var t = setTimeout(function () {
        startTime()
    }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

export default startTime;