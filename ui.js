class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.location1 = document.getElementById('w-location1');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.windspeed = document.getElementById('w-windspeed');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');

    }

    paint(weather){
        this.location.textContent = weather.sys.country;
        this.location1.textContent = weather.name;
        this.desc.textContent = weather.weather.description;
        this.temp_string.innerHTML = weather.main.temp_string;
        this.icon.setAttribute('src', weather.weather.icon);
        this.details.textContent = weather.main;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.windspeed.textContent = `wind Speed: ${weather.wind.speed}`;
        this.feelsLike = `Feels like: ${weather.main.feels_Like}`;
        this.dewpoint.textContent = `Feels like: ${weather.wind.dewpoint}`;
    }


}