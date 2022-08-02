// importerar funktionen getWeather från JS-filen fetch.js
import {getWeather} from './fetch.js';

getWeather().then(getTodaysWeather);

// funktion som tar in resultatet från API-anropet och skriver ut upp dagens väder 
// genom att anropa metoden printTodaysWeather().
// om resultatet från API-anropet inte innehållet någon data anropas istället funktionen printErrMessage(). 
function getTodaysWeather(result){ 

    if (result != null) {
        printTodaysWeather(result);
        printWeatherIcons();
    }
    else {
        printErrMessage();
    }
}

// funktion som skriver ut dagens väder
function printTodaysWeather(result){
    let description = result.weather[0].description;
    let id = result.weather[0].id;
    let temp = Math.round(result.main.temp);
    let tempMin = Math.round(result.main.temp_min);
    let tempMax = Math.round(result.main.temp_max);
    let humidity = Math.round(result.main.humidity);
    let vindSpeed = Math.round(result.wind.speed);
    let cloudiness = result.clouds.all;
    let img = returnWeatherImage(id);

    const descriptionEl = document.getElementById("weather__description");
    descriptionEl.innerHTML = description;
   
    const imgEl = document.getElementById("weather__img");
    imgEl.innerHTML = `<img src="${img}" alt="${description}">`;

    const tempEl = document.getElementById("weather__temp");
    tempEl.innerHTML = temp + "°";

    const tempMaxEl = document.getElementById("weather__tempMax");
    tempMaxEl.innerHTML = tempMax + "°";

    const tempMinEl = document.getElementById("weather__tempMin");
    tempMinEl.innerHTML = tempMin + "°";

    const vindSpeedEl = document.getElementById("weather__vindSpeed");
    vindSpeedEl.innerHTML = vindSpeed + " m/s";
    
    const humidityEl = document.getElementById("weather__humidity");
    humidityEl.innerHTML = humidity + " %";
    
    const cloudinessEl = document.getElementById("weather__cloudiness");
    cloudinessEl.innerHTML = cloudiness + "%";
}

// funktion som returnerar väderbild utifrån väderkod
function returnWeatherImage(id) {

    if (id < 800) {
        return "img/icon-rainy.png";
    }
    else if (id==800) {
        return "img/icon-sunny.png";
    }
    else {
        return "img/icon-cloudy.png";
    }
}

// funktion som skriver ut värderikoner
function printWeatherIcons(){
    const iconsEl = document.getElementById("weather__icons");
    
    iconsEl.innerHTML = `
    <p title="Vindhastighet">
        <span class="material-symbols-outlined">
        air
        </span>
    </p>
    <p title="Luftfuktiget">
        <span class="material-symbols-outlined">
        water_drop
        </span>
    </p>
    <p title="Molnighet">
        <span class="material-symbols-outlined">
        cloudy
        </span>
    </p>`;
}

// funktion som skriver ut ett meddelande om det inte finns någon data tillgänglig
function printErrMessage(){
    const sectionEl = document.getElementById("weather__section");
    
    sectionEl.innerHTML = `
        <div class="section__city">
        <h1>Någonting gick fel...</h1>
        <p>Vem vet om det blir regnigt, molnigt eller soligt i Vällingby idag?</p>
        </div>`;
}