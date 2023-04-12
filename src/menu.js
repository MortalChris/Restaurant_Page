function createMenu(){
    const contentDiv = document.getElementById("content");

    const menu = createElement(div);
        menu.setAttribute("id","menu");
        contentDiv.appendChild(menu);

    const menuDiv1 = document.createElement("div");
        menuDiv1.setAttribute("id","menuDiv1");
        menuDiv1.innerText = "Example Text 1";
        menu.appendChild(menuDiv1);
        const imgDiv1 = document.createElement("img");
            imgDiv1.setAttribute("id","imgDiv1");
            // imgDiv1.src = ;
            menuDiv1.appendChild(imgDiv1);
    
    const menuDiv2 = document.createElement("div");
        menuDiv2.setAttribute("id","menuDiv2");
        menuDiv2.innerText = "Example Text 2";
        menu.appendChild(menuDiv2);
        const imgDiv2 = document.createElement("img");
            imgDiv2.setAttribute("id","imgDiv2");
            // imgDiv2.src = ;
            menuDiv2.appendChild(imgDiv2);

    const menuDiv3 = document.createElement("div");
        menuDiv3.setAttribute("id","menuDiv3");
        menuDiv3.innerText = "Example Text 3";
        menu.appendChild(menuDiv3);
        const imgDiv3 = document.createElement("img");
            imgDiv3.setAttribute("id","imgDiv3");
            // imgDiv3.src = ;
            menuDiv3.appendChild(imgDiv3);

    const menuDiv4 = document.createElement("div");
        menuDiv4.setAttribute("id","menuDiv4");
        menuDiv4.innerText = "Example Text 4";
        menu.appendChild(menuDiv4);
        const imgDiv4 = document.createElement("img");
            imgDiv4.setAttribute("id","imgDiv4");
            // imgDiv4.src = ;
            menuDiv4.appendChild(imgDiv4);
};

export {createMenu};