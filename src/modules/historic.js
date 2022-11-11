import { weatherUnity } from "./weatherInit";
const listSearch = document.querySelectorAll('div.list-button');

var cities = localStorage;
function historicCity(){
    for(var i=0; i<listSearch.length; i++){
        listSearch[i].innerHTML = cities.getItem(`lastName-${i}`);
        listSearch[i].addEventListener('click', ()=>{
            console.log(listSearch[i].textContent)
        })
    }
}
export default historicCity;
