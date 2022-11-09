import cityInformation from './cityData.json';

export {showTemp, cityData, realTemperature};
const cityData = cityInformation;
var realTemperature = parseInt(cityData.main.feels_like, 10);
function showTemp(){
    return parseInt(cityData.main.feels_like, 10);
}


