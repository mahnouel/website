/* global XMLHttpRequest:true */

const RSS_URL =
  'https://cors.io/?https://feeds.pinboard.in/json/u:mahnouel/t:mahnouel.io/'

function get (url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)

    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    request.onerror = function (error) {
      console.log(error)
      reject(new Error('Network error'))
    }

    request.send()
  })
}

get(RSS_URL).then(data => {
  const json = JSON.parse(data)
  for (const key in json) {
    const item = json[key]

    const link = document.createElement('a')
    link.classList.add('link')
    link.setAttribute('href', item.u)
    link.innerHTML = item.d

    const description = document.createElement('small')
    description.innerHTML = `${item.n}`

    const li = document.createElement('li')
    li.appendChild(link)
    li.appendChild(document.createElement('br'))
    li.appendChild(description)

    const container = document.querySelector('.js-etc')
    container.appendChild(li)
  }
  console.log(json)
})
