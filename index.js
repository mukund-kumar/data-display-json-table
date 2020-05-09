
const app = document.getElementById('root')
const container = document.createElement('div')
app.appendChild(container)



var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('tr')
      container.appendChild(card)
      let keys =[];
      for(var key in movie){
        var tr1 = document.createElement('td')
        tr1.textContent = movie[key]
        card.appendChild(tr1)
      console.log(keys);
      }
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()