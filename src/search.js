import apiFunction from "./api";
const cityName = document.querySelector('input.cityName');
const search = document.querySelector('button.buttonSearch');
const divMore = document.querySelector('div.containerInfo');
const weekly = document.querySelector('div.weekly');
const hourLy = document.querySelector('div.containerSky');
const status = document.querySelector('div.status');
function mainFunction(){
    search.addEventListener('click', showDatta)
}
function showDatta() {
    if (cityName.value.length == 0) {
      window.alert("[Error] You need to write something");
    }else{
        weekly.innerText = '';
        hourLy.innerText = '';
        divMore.innerText = '';
        status.innerText = '';
        apiFunction(cityName.value);
        cityName.value = '';
    }
}
export default mainFunction;