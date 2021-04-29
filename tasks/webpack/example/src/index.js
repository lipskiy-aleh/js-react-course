import { renderSearch } from './modules/search'
import { renderWeather } from './modules/weather'


parentElement// 1 - get root element

// params === { city: , country: }
async function onCallSearch(params) {
  // 1 - get weather from API (data)
  const data = await getWeather(params)
  // 2 -  renderWeather(parentElement, data)
  renderWeather(parentElement, data)
}

function getWeather() {
}

renderSearch(parentElement, onCallSearch)