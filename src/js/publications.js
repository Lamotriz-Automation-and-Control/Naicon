// Function to add the html code content for publications page
function addPublicationsContent(){
    // Getting elements
    content = document.getElementById('content');

    // Adding html code
    content.innerHTML = 
    `
    <h1> ${language.publications.title} </h1>
    <h3> ${language.publications.subtitle} </h3>
    `;

    // Getting year
    year = parseInt(new Date().getFullYear());
    // Size of publications
    size = language.publications.pub.length;
    // 
    label = false;
    counter = 0;
    index_publication = 1;

    while(counter < size){
        for(i in language.publications.pub){

            if (language.publications.pub[i].year == year){

                if (label == false){
                    content.innerHTML += `
                        <h2> ${year} </h2>
                    `;
                    label=true;
                };

                // Adding html code
                content.innerHTML += `  
                    <p>${index_publication}. ${language.publications.pub[i].authors} <a href="${language.publications.pub[i].link}" >${language.publications.pub[i].title}</a> ${language.publications.pub[i].location}</p>
                `;
                index_publication ++;
                counter++
            }
        }
        // Reset index
        index_publication = 1;
        // Decreasing year
        year--;
        // Reset label
        label=false;
    }

    
}


addPublicationsContent();
