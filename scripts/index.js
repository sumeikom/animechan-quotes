
// api url
const api_url = 
      "https://www.dnd5eapi.co/api/spells";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
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
          <th>Index</th>
          <th>Name</th>
          <th>Url</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.index} </td>
    <td>${r.name}</td>
    <td>${r.url}</td> 
          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("spells").innerHTML = tab;
}