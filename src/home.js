function createHome(){

    const contentDiv = document.getElementById("content");

    const home = document.createElement("div");
        home.setAttribute("id","home");
        contentDiv.appendChild(home);


    const heroDiv = document.createElement("div");
        home.appendChild(heroDiv);
    const image = document.createElement("img");
        image.setAttribute("id","home-Image");
        image.src = "dist\images\deep-dish-pizza.jpg";
        heroDiv.appendChild(image);
    const paragraph = document.createElement("p");
        paragraph.setAttribute("id","home-Paragraph");
        paragraph.innerText  = "This restuarant is the best restuant in the world!";
        heroDiv.appendChild(paragraph);

};

export {createHome};