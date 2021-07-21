const URL = 'https://animechan.vercel.app/api/random'

function getAnimeQuote() {
  return fetch(URL, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    currentQuote = data
    const quote = data.quote
    quotePTag.innerText = quote
  })
}

function postAnimeQuote(body) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}