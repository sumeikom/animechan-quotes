console.log('%cWelcome to Animechan!', 'color: pink')

const quotePTag = document.querySelector('#joke')
const reloadButton = document.querySelector('#reload-joke-button')
const likeButton = document.querySelector('#like-button')
const likedQuotesContainer = document.querySelector('#liked-quotes')

let currentQuote = {}
const likedQuotes = []

function saveJoke() {
  if (!likedQuotes.includes(currentQuote)) {
    likedQuotes.push(currentQuote)
    const li = document.createElement('li')
    li.innerText = currentJokeQuote.quote
    likedQuotesContainer.append(li)
    li.addEventListener('click', event => removeQuote(event))
  } else {
    alert('Opps! You already have that quote!')
  }
}

function removeQuote(event) {
  event.target.remove()
}

reloadButton.addEventListener('click', getAnimeQuote)

getAnimeQuote()

likeButton.addEventListener('click', saveQuote)