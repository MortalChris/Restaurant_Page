import {createHome} from './home';
import {createContact} from './contact';
import {createMenu} from './menu';
import './style.css';

function webpage() {

    const contentDiv = document.getElementById("content");
    
    const header = document.createElement("header");
        header.setAttribute("id","home-Header");
        const headerTitle = document.createElement("p");
        headerTitle.textContent = "Mama Mia's Pizzeria";
        header.appendChild(headerTitle);
        contentDiv.appendChild(header);

        // createHome();
        // createMenu();
        // createContact();

        const nav = document.createElement("nav");
            nav.setAttribute("id","navbar")
            header.appendChild(nav);
        const homeTab = document.createElement("a");
            homeTab.innerText = "Home";
            nav.appendChild(homeTab);
        const menuTab = document.createElement("a");
            menuTab.innerText = "Menu";
            nav.appendChild(menuTab);
        const contactTab = document.createElement("a");
            contactTab.innerText = "Contact";
            nav.appendChild(contactTab);

        const footer = document.createElement("div");
            footer.setAttribute("id","footer");
            footer.innerText = "Created by Christian Valeri";
            contentDiv.appendChild(footer);

            homeTab.addEventListener("click", function(){
                home.style.display = "block";
                contact.style.display = "none";
                menu.style.display = "none";
            });
            contactTab.addEventListener("click", function(){
                home.style.display = "none";
                contact.style.display = "block";
                menu.style.display = "none";
            });
            menuTab.addEventListener("click", function(){
                home.style.display = "none";
                contact.style.display = "none";
                menu.style.display = "block";
            });
        
};
webpage();


console.log("I was here and here wasdwa");