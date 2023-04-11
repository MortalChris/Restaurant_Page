import {createHome} from './home';
import './style.css';

function webpage() {
    createHome();
    const header = document.createElement("header");
        header.setAttribute("id","home-Header");
        header.innerText = "Restuarant Page";
        home.appendChild(header);
        const nav = document.createElement("nav");
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
};
webpage();


console.log("I was here and here wasdwa");