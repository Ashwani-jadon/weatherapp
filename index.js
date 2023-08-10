// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const temperature = document.querySelector(".temp");
    const city = document.querySelector(".city");
    const humidity = document.querySelector(".humidity");
    const windSpeed = document.querySelector(".Wind");
    searchInput.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault(); // Prevent form submission or page reload
            const cityName = searchInput.value;
            fetchWeatherData(cityName);
        }
    });

    // Function to fetch weather data and update the UI
    const fetchWeatherData = async (cityName) => {
        const apiKey = "a0dc502e891784c274781c5be9ae9074"; // Replace with your actual API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            weatherIcon.src = `images/${data.weather[0].icon}.png`;
            temperature.textContent = `${data.main.temp}°C`;
            city.textContent = data.name;
            humidity.textContent = `${data.main.humidity}%`;
            windSpeed.textContent = `${data.wind.speed} Km/hr`;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    // Event listener for the search button
    searchButton.addEventListener("click", () => {
        const cityName = searchInput.value;
        fetchWeatherData(cityName);
    });

    // Initial weather data fetch (you can replace "New York" with your default city)
    fetchWeatherData("Aligarh");
});