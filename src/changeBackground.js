export default changeBack;

const main = document.querySelector('section.bg');
const data = new Date();
const hour = data.getHours();
function changeBack(disc){
    console.log(hour);
    if(disc == 'Clouds'){
        main.classList.add('cloud');
    }if(disc == 'Rain'){
        main.classList.add('rainy');
    }else{
        if(hour >= 6 && hour < 12){
            main.classList.add('sunrise');
        }
        if(hour >= 12 && hour < 15){
            main.classList.add('midday');
        }
        if(hour >= 15 && hour < 18){
            main.classList.add('sunset');
        }
        if(hour >= 18 || hour < 6){
            main.classList.add('night');
        }
    }
}
 
