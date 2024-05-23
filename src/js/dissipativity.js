// Function to add the html code content for dissipativity page
function addDissipativityContent(){
    // Getting elements
    // content = document.getElementById('content');
    //"project_1": {
    //    "title": "Dissipativity based...",
    //    "last_update": "Last update on November 16th, 2023",
    //    "description": {
    //        "title": "Description...",
    //        "details": "Overview ..."
    //    },
    // Adding html code
    // Getting elements
    content = document.getElementById('content');

    // Adding html code
    content.innerHTML = 
    `
    <h1>${language.proj_1.title}</h1>
    <h2>${language.proj_1.description.title}</h2>
    <p>${language.proj_1.description.details}</p>
    <br>

    <small>${language.proj_1.last_update}</small>
    `;
}

addDissipativityContent();
