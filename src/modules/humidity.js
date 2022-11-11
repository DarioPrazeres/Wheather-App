const progressHumidity = document.querySelector('div.progress');
const valorHumidity = document.querySelector('h2.humidityP');

function humidityShow(valor){
    progressHumidity.setAttribute('style', `width: ${valor}%`);
    valorHumidity.innerHTML = `${valor}%`;
}
export default humidityShow;