function cloudStatus(statusTemp, classli){
    var hour = new Date().getHours();
    const cloud = document.createElement('img');
    cloud.classList.add(classli);
    cloud.src = `http://openweathermap.org/img/wn/${statusTemp}@4x.png`;
    return cloud;
}
export default cloudStatus;