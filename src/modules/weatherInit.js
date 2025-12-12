import converterWeather from "./converterWeather";
import headCity from "../head";
import humidityShow from "./humidity";
import showAir from "./air";
import showVisibility from "./visibility";
import { weatherDaily, weekTimeline, showTempMaxMin } from "../weekly";
import windShow from "./wind";

const buttonCelsius = document.getElementById('unity-1');
const buttonFahrenheit = document.getElementById('unity-2');
const buttonKelvin = document.getElementById('unity-3');

//Key Of API
var key = 'a4ad64410595a2036d013339142d4684';
var cityData = 0;
var dailyData = 0;
var unity = 'Celsius';

async function weatherUnity(city) {
    /**-----------Api Init------------- */
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
            { mode: 'cors' }
        );

        cityData = await response.json();

        const daily = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&appid=${key}`,
            { mode: 'cors' }
        );

        dailyData = await daily.json();

        var realTemperature = parseInt(cityData.main.feels_like, 10);

    } catch (error) {
        alert('Error! Verify your Connection or City Not Found!');
    }

    /**-------Initialization of Functions----------- */
    var humidityValue = cityData.main.humidity;

    weekTimeline();
    headCity(
        cityData.name,
        cityData.weather[0].icon,
        cityData.weather[0].main,
        converterWeather(realTemperature, unity)
    );

    humidityShow(humidityValue);
    showAir(cityData.main.pressure);
    showVisibility(cityData.visibility / 1000);

    processFiveDays();
    windShow(cityData.wind.speed, cityData.wind.deg);

    buttonCelsius.addEventListener('click', () => {
        buttonFahrenheit.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonCelsius.classList.add('btn-active');
        unity = 'Celsius';
        headCity(cityData.name, cityData.weather[0].icon, cityData.weather[0].main,
            converterWeather(realTemperature, unity)
        );
        processFiveDays();
    });

    buttonFahrenheit.addEventListener('click', () => {
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonFahrenheit.classList.add('btn-active');
        unity = 'Fahrenheit';
        headCity(cityData.name, cityData.weather[0].icon, cityData.weather[0].main,
            converterWeather(realTemperature, unity)
        );
        processFiveDays();
    });

    buttonKelvin.addEventListener('click', () => {
        buttonFahrenheit.classList.remove('btn-active');
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.add('btn-active');
        unity = 'Kelvin';
        headCity(cityData.name, cityData.weather[0].icon, cityData.weather[0].main,
            converterWeather(realTemperature, unity)
        );
        processFiveDays();
    });
}


function groupForecastByDay(list) {
    const days = {};

    list.forEach(item => {
        const date = item.dt_txt.split(" ")[0]; // yyyy-mm-dd

        if (!days[date]) {
            days[date] = [];
        }

        days[date].push(item);
    });

    return days;
}

function summarizeDay(items) {
    let min = Infinity;
    let max = -Infinity;
    let icon = items[0].weather[0].icon;

    items.forEach(i => {
        const temp = i.main.temp;
        if (temp < min) min = temp;
        if (temp > max) max = temp;
    });

    return { min, max, icon };
}

function processFiveDays() {
    const grouped = groupForecastByDay(dailyData.list);

    // Pegamos apenas os próximos 5 dias
    const days = Object.keys(grouped).slice(1, 6);

    days.forEach((date, index) => {
        const summary = summarizeDay(grouped[date]);

        // max e min
        showTempMaxMin(unity, summary.max, summary.min, index);

        // ícone
        weatherDaily(summary.icon, index);
    });
}

export { weatherUnity };
