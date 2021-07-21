const URL = 'http://localhost:3000/spells';

fetch(URL)
.then(response => response.json())
.then(data => {
  console.log(data);
  const ul = document.querySelector('#spell-information');
  
  data.forEach(spells => {
    const interspells = `${spells.index} ${spells.name} ${spells.url}`;
    const li = document.createElement('li')
    li.textContent = interspells
    ul.append(li);
  })
})