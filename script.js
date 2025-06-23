async function getWeather() {
  const city = document.getElementById("cityInput").value.trim(); // remove spaces
  const apiKey = "YOUR-API-KEY";  // ADD HERE
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("Fetching URL:", url); // ← Add this line

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data); // ← And this

    if (data.cod === 200) {
      const result = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Forecast: ${data.weather[0].main}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>Error fetching data</p>`;
    console.error(error);
  }
}
