console.log('%cWelcome to Animechan!', 'color: pink')

const quotePTag = document.querySelector('#quote')
const animePTag = document.querySelector('#anime')
const reloadButton = document.querySelector('#reload-quote-button')
const likeButton = document.querySelector('#like-button')
const likedQuotesContainer = document.querySelector('#liked-quotes')

let currentQuote = {}
let likedQuotes = []

function saveQuote() {
  if (!likedQuotes.includes(currentQuote)) {
    likedQuotes.push(currentQuote)
    

    function removeQuote(event) {
      event.target.remove()
      const removeAnimeQuotes = likedQuotes.filter(likedQuote => {
        return likedQuote !== currentQuote
      }
        )
        likedQuotes = removeAnimeQuotes
    } 


    const li = document.createElement('li')
    li.innerText = currentQuote.quote
    likedQuotesContainer.append(li)
    li.addEventListener('click', event => removeQuote(event))
  } else {
    alert('Opps! You already have that quote you silly baka!')
  }
}



reloadButton.addEventListener('click', getAnimeQuote)

getAnimeQuote()

likeButton.addEventListener('click', saveQuote)