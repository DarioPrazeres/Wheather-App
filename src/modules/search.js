import { weatherUnity } from "./weatherInit";

const cityName = document.querySelector('input.cityName');
const btnSearch = document.querySelector('button.buttonSearch');
const elementForm = document.querySelector('div.form-group');
const elementInfo = document.querySelector('div.info');

function search() {
    btnSearch.addEventListener('click', ()=>{
        if(cityName.value.length === 0){
            alert('Write The name of city')
        }else{
            var city = cityName.value.charAt(0).toUpperCase() + cityName.value.slice(1);
            elementForm.classList.add('invisible');
            elementInfo.classList.remove('invisible');
            console.log(city);
            //historicCity(city, 1);
            var dp = localStorage
            console.log(dp)
            weatherUnity(city);
            cityName.value='';
        }
        
    })
}
function historicCity(nameCity, count){
    localStorage.setItem(`city-${count}`, nameCity);
    console.log('HERE--------')
    console.log(localStorage.getItem(`city-${count}`))
}
export default search;