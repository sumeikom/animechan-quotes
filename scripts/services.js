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

    const anime = data.anime
    animePTag.innerText = anime
  })
}

