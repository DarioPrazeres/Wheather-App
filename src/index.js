import apiFunction from './api';
import mainFunction from './search';
import displayForm from './modules/hiddenElement';
import './style.css';
import weatherUnity from './modules/unityWeather';
import humidityShow from './modules/humidity';

var city = 'luanda';

weatherUnity();
//apiFunction(city);
//mainFunction();
displayForm();
