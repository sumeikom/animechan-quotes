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

function saveAnimeBttn(){
    const ol = document.getElementById("saved-anime-quote")
    const li = document.createElement("li")
    const liButton = document.createElement("button")
    const a = document.createElement("a")

    liButton.innerHTML = "x"
    a.innerText = document.querySelector("#anime-title").innerText
    a.href = document.querySelector("img").src
    li.appendChild(a) 
    a.target = "_blank"
    ol.appendChild(li)
    li.appendChild(liButton)
    liButton.addEventListener("click", (e) => removeAnimeQuote(e)); 
};

function removeAnimeQuote(e){
    e.target.parentNode.remove()
};