const projects = [{
    name: "Food Resturant Landing Page",
    image: './images/food-resturant.png',
    link: "https://ssulaimon.github.io/resturant-website/",
    gitLink:"https://github.com/ssulaimon/portfolio-website"
}];

let projectContainer = document.getElementById("project-container");

for(let index = 0; index < projects.length; index ++){
   
    let projectDiv = document.createElement("div");
    let projectImage = document.createElement("img");
    let projectLink = document.createElement("a");
    let projectTitle = document.createElement('p');


   
    projectDiv.setAttribute('id', 'projectDiv');
  
    projectImage.setAttribute('src', projects[index].image);
    projectTitle.setAttribute('id', 'projectName');
    projectTitle.textContent = projects[index].name;

    projectImage.setAttribute('id', 'projectImage');
    projectLink.setAttribute('id', 'projectLink');
    projectLink.setAttribute('target', '_blank')
    projectLink.setAttribute('href', projects[index].link);
    projectLink.textContent = "Link";
  
    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectLink);
    projectDiv.appendChild(projectTitle);
    projectContainer.appendChild(projectDiv);

   
   
    
}