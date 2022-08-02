// funktion som hämtar data från Open Weather Map för positionen Vällingby
export function getWeather() {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=59.367081&lang=se&lon=17.869143&appid=9df361c4e86e53ff51710451f6884f56&units=metric`)
  .then(response => response.json())
  .then(data => data)
}