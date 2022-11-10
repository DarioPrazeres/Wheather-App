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
            elementForm.classList.add('invisible');
            elementInfo.classList.remove('invisible');
          console.log(cityName.value);
            weatherUnity(cityName.value);
            cityName.value='';
        }
        
    })
}
function cleanStatus(){
    for(let i=0; i<6; i++){
        console.log('Contador:' + i)
    }
}
export default search;