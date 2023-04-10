function createHome(){

    const contentDiv = document.getElementById("content");

    const header = document.createElement = ("header");
        header.innerText  = "Restuarant Page";
        contentDiv.appendChild(header);
    const image = document.createElement = ("img");
        contentDiv.appendChild(image);
    const paragraph = document.createElement = ("p");
        paragrpah.innerText  = "This restuarant is the best restuant in the world!";
        contentDiv.appendChild(paragrpah);

};
createHome();

export {createHome};