// Function to add the html code content for contact page
function addDissipativityContent(){
    // Getting elements
    content = document.getElementById('content');

    // Adding html code
    content.innerHTML = 
    
        
    //"project_1": {
    //    "title": "Dissipativity based...",
    //    "last_update": "Last update on November 16th, 2023",
    //    "description": {
    //        "title": "Description...",
    //        "details": "Overview ..."
    //    },

        
    <h1> ${language.project_1.title} </h1>

    <h2>${language.project_1.office_phone.title}</h2>
    <p>${language.projet_1.description}</p>
    <br>
  `;
}

addDissipativityContent();

// Initialize the map -> setView([latitude, longitude], zoom)
var map = L.map('map').setView([-3.74544911119979, -38.57916624923715], 20);
      
// Add a tile layer (you can use other tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
