function createHome(){

    const contentDiv = document.getElementById("content");

    const home = document.createElement("div");
        home.setAttribute("id","home");
        contentDiv.appendChild(home);

    const header = document.createElement("header");
        header.setAttribute("id","homeHeader");
        header.innerText = "Restuarant Page";
        home.appendChild(header);
    const image = document.createElement("img");
        image.setAttribute("id","homeImage");
        image.src = "dist\images\deep-dish-pizza.jpg";
        home.appendChild(image);
    const paragraph = document.createElement("p");
        paragraph.setAttribute("id","homeParagraph");
        paragraph.innerText  = "This restuarant is the best restuant in the world!";
        home.appendChild(paragraph);

};

export {createHome};