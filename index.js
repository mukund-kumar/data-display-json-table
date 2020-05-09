
const app = document.getElementById('root')
const container = document.createElement('div')
const th1 = document.createElement('th')
th1.textContent = "Movie name"
const th2 = document.createElement('th')
th2.textContent = "Movie title"
app.appendChild(container)
container.appendChild(th1)
container.appendChild(th2)


var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('tr')
      

      const tr1 = document.createElement('td')
      tr1.textContent = movie.title

      const tr2 = document.createElement('td')
      tr2.textContent =movie.id

      
      container.appendChild(card)
      card.appendChild(tr1)
      card.appendChild(tr2)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()