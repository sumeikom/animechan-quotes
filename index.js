const animeImg = document.querySelector("#meme-img");
const reloadAnimeBttn = document.getElementById('button');
const upvoteCount = document.getElementById('upvotes');
const animeTitle = document.getElementById("meme-title");
const saveAnimeBttn = document.getElementById("save-button")

document.addEventListener("DOMContentLoaded", () => {
    console.log("HTML has Loaded!");

    reloadAnimeBttn.addEventListener('click', getAnimeQuote)

    saveAnimeBttn.addEventListener('click', saveAnimeQuote)

    upvoteCount.addEventListener('mouseover', (e) => {
        e.target.style.color = "pink"
    });
    
    upvoteCount.addEventListener('mouseout', (e) => {
        e.target.style.color = "black"
    });
});