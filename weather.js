class Weather {
    constructor(countrycode, cityname){
        this.apiKey = '7dd95ed63e46418723f706b307208ed9';
        this.countrycode = countrycode;
        this.cityname= cityname;
       
        
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityname},${this.countrycode}&appid=${this.apiKey}`)
        const responseData = await response.json();
        return responseData;
    }

    //change weather location
    changeLocation(countrycode, cityname) {  
        this.countrycode = countrycode;
        this.cityname = cityname;
       
    }
}
 