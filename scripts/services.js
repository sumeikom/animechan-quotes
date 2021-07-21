
// api url
const api_url = 
      "https://ghibliapi.herokuapp.com/films";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    let data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Title</th>
          <th>Description</th>
          <th>Director</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.title} </td>
    <td>${r.description}</td>
    <td>${r.director}</td> 
          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("films").innerHTML = tab;
}