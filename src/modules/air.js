const airValue = document.querySelector('h2.air');

function showAir(value){
    airValue.innerHTML = `${value}mb`
}
export default showAir;