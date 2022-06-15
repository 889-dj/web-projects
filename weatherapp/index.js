const parent = document.querySelector('.weather-info-body');
const button = document.querySelector('.button')
const input = document.querySelector('.inputvalue')
const sun = document.querySelector('.sun')
const cloud = document.querySelector('.cloud')

button.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=21948b5174d71065a0f0e5d495f842a3
`).then(response => response.json()).then(data => {
    console.log(data)
    const markup = `
    <h1>${data.name}</h1>
    <p>${data.weather[0].description}</p>
    <p>${Math.floor(data.main.temp -  273.15)} <sup>o</sup>C</p>
    `;
    parent.insertAdjacentHTML('afterbegin', markup);

}).catch(() => {
    alert('City not found')
}
)

})