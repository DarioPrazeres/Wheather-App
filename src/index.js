import apiFunction from './api';
import mainFunction from './search';
import displayForm from './modules/hiddenElement';
import './style.css';
import {weatherUnity, unity} from './modules/unityWeather';
import humidityShow from './modules/humidity';
import { weekTimeline, weatherDaily } from './weekly';

var city = 'luanda';
weekTimeline()
weatherUnity();
//apiFunction(city);
//mainFunction();
displayForm();
