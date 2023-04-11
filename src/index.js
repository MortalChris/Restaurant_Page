import {createHome} from './home';
import './style.css';

function webpage() {
    createHome();
    const contentDiv = document.getElementById("content");
    
    const header = document.createElement("header");
        header.setAttribute("id","home-Header");
        const headerTitle = document.createElement("p");
        headerTitle.textContent = "Resturant Title";
        header.appendChild(headerTitle);
        home.appendChild(header);

        const nav = document.createElement("nav");
            header.appendChild(nav);
        // const restName = document.createElement("a");
        //     restName.innerText = "Restuarant Page";
        //     nav.appendChild(restName);
        const homeTab = document.createElement("a");
            homeTab.innerText = "Home";
            nav.appendChild(homeTab);
        const menuTab = document.createElement("a");
            menuTab.innerText = "Menu";
            nav.appendChild(menuTab);
        const contactTab = document.createElement("a");
            contactTab.innerText = "Contact";
            nav.appendChild(contactTab);
};
webpage();


console.log("I was here and here wasdwa");