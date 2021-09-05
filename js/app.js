const print = console.log;

const API_KEY = `6bb93567c62ce117eb1eb70324db7e9e`;

const searchTemperature = () =>{
    const citySearch = document.getElementById('city_search');
    const cityName = citySearch.value;
    citySearch.value = '';

    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data));
}

const displayInfo = info => {
    print(info);

    const city = document.getElementById('city');
    city.innerText = info.name;

    const temparature = document.getElementById('temperature');
    temperature.innerText = info.main.temp;

    const condition = document.getElementById('condition');

    condition.innerText = info.weather[0].main;
}