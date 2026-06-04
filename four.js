async function getWeather() {
    let city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("error").innerText = "Please enter city name";
        return;
    }
    let apiKey = "d6b10b7a7046edf90ef4b9d71950ea5d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        if (data.cod != 200) {
            document.getElementById("error").innerText = "City not found";
            document.getElementById("weatherBox").style.display = "none";
            return;
        }
        document.getElementById("error").innerText = "";
        document.getElementById("weatherBox").style.display = "block";
        document.getElementById("temp").innerText = data.main.temp + "°C";
        document.getElementById("desc").innerText = data.weather[0].description;
        let icon = data.weather[0].icon;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    } catch (e) {
        document.getElementById("error").innerText = "Error fetching data";
    }
}