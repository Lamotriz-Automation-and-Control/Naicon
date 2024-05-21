// Function to add the html code content for dissipativity page
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
