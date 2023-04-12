function createHome(){

    const contentDiv = document.getElementById("content");

    const home = document.createElement("div");
        home.setAttribute("id","home");
        contentDiv.appendChild(home);

    const heroDiv = document.createElement("div");
        heroDiv.setAttribute("id","heroDiv");
        home.appendChild(heroDiv);
    // const image = document.createElement("img");
    //     image.setAttribute("id","home-Image");
    //     image.src = "dist\images\deep-dish-pizza.jpg";
    //     heroDiv.appendChild(image);
    const heroTitle = document.createElement("h1");
        heroTitle.setAttribute("id","home-hero-title");
        heroTitle.innerText  = "Mama Mia";
        heroDiv.appendChild(heroTitle);
    const paragraph = document.createElement("p");
        paragraph.setAttribute("id","home-Paragraph");
        paragraph.innerText  = "We serve the best pizza you can find in Houston!";
        heroDiv.appendChild(paragraph);
};

export {createHome};