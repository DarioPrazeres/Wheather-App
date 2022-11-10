import sourceNav from '../icon/navegacao.png';

const imgNavegation = document.querySelector('img.navegation');
const windElement = document.querySelector('h2.wind');
imgNavegation.src = sourceNav;

function windShow(speed, degrau){
    console.log('Eu sou WIND');
    imgNavegation.setAttribute('style', `transform: rotate(${degrau}deg)`);
    windElement.innerHTML = `${speed} mph`;
}
export default windShow;