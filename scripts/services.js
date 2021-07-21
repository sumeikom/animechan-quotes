const URL = `https://animechan.vercel.app/api/random}` 
function getAnimeQuoteOnce() {
    fetch(URL, { 
        headers: {
            "Accept" : "application/json"
        }
    })
    .then(response => response.json())
    .then(quote => console.log(quote))
    
    //.then(res => res.json()) 
    //.then(data => {
        // const title = data.title
        // memeImg.src = data.url
        // memeImg.style.filter = "invert(0%)"
        // upvoteCount.innerHTML = `${data.ups} People have upvoted this meme 🔥 (hover me)`
        // memeTitle.innerHTML = `Meme Title: ${title}` 
        // invertImg();
    
};