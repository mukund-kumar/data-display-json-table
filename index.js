
const app = document.getElementById('root')
const container = document.createElement('div')
app.appendChild(container)



var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // to set the title of table
  var data = JSON.parse(this.response)
  console.log(Object.keys(data[0]));
  for(key in Object.keys(data[0]) ) {
    var th = document.createElement('th')
        th.textContent = (Object.keys(data[0]))[key]
        container.appendChild(th)
  }
  // Begin accessing JSON data here
  if (request.status >= 200 && request.status < 400) {
    data.forEach(data => {
      const card = document.createElement('tr')
      container.appendChild(card)
      for(var key in data){
        var tr1 = document.createElement('td')
        tr1.textContent = data[key]
        card.appendChild(tr1)
      }
    })
  } else {
    const errorMessage = document.createElement('not working')
    errorMessage.textContent = ` it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()