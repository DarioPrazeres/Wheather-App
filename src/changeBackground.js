export default changeBack;
const main = document.querySelector('section.bg');
const data = new Date();
const hour = data.getHours();
function changeBack(disc){
    console.log(hour);
    if(disc == 'Clouds'){
        main.setAttribute('style', 'background: url(./icon/cloud-2.jpg); background-position: center;background-repeat: no-repeat; background-size: cover;');
    }if(disc == 'Rain'){
        main.setAttribute('style', 'background: url(./icon/rain.jpg); background-position: center;background-repeat: no-repeat; background-size: cover;');
    }else{
        if(hour >= 6 && hour < 12){
            main.setAttribute('style', 'background: url(./icon/sunrise.jpg);    background-position: center;background-repeat: no-repeat; background-size: cover;');
        }
        if(hour >= 12 && hour < 15){
            main.setAttribute('style', 'background: url(./icon/midday.jpg);    background-position: center;background-repeat: no-repeat; background-size: cover;');
        }
        if(hour >= 15 && hour < 18){
            main.setAttribute('style', 'background: url(./icon/sunset_1.jpg); background-position: center;background-repeat: no-repeat; background-size: cover;');
        }
        if(hour >= 18 || hour < 6){
            main.setAttribute('style', 'background: url(./icon/night.jpg);    background-position: center;background-repeat: no-repeat; background-size: cover;');
        }
    }
}
 
