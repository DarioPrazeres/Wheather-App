import apiFunction from './api';
import mainFunction from './search';
import displayForm from './modules/hiddenElement';
import './style.css';

var city = 'luanda';

apiFunction(city);
mainFunction();
displayForm();
