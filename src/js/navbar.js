import { clearPage } from "./clearPage";
import { displayHomepage } from "./displayHomepage";
import { displayMenuPage } from "./displayMenuPage";
import { displayContactPage } from "./displayContactPage";

export const createNavbar = () => {
    const body = document.querySelector("body");

    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    body.appendChild(navbar);

    const ul = document.createElement("ul");
    navbar.appendChild(ul);

    const liHome = document.createElement("li");
    liHome.innerText = "Home";
    ul.appendChild(liHome);

    liHome.addEventListener("click", () => {
        clearPage();
        displayHomepage();
        liHome.classList.add("li-red-bg");
        liMenu.classList.remove("li-red-bg");
        liContact.classList.remove("li-red-bg");
    });

    const liMenu = document.createElement("li");
    liMenu.innerText = "Menu";
    ul.appendChild(liMenu);

    liMenu.addEventListener("click", () => {
        clearPage();
        displayMenuPage();
        liHome.classList.remove("li-red-bg");
        liMenu.classList.add("li-red-bg");
        liContact.classList.remove("li-red-bg");
    });

    const liContact = document.createElement("li");
    liContact.innerText = "Contact";
    ul.appendChild(liContact);

    liContact.addEventListener("click", () => {
        clearPage();
        displayContactPage();
        liHome.classList.remove("li-red-bg");
        liMenu.classList.remove("li-red-bg");
        liContact.classList.add("li-red-bg");
    });
    

    // let navbarItems = ["Home", "Menu", "Contact"];

    // for (let i = 0; i < navbarItems.length; i++) {
    //     const li = document.createElement("li");
    //     ul.appendChild(li);

    //     const a = document.createElement("a");
    //     li.appendChild(a);
        
    //     let navbarItemLowerCase = navbarItems[i].toLowerCase();
    //     a.href = `./${navbarItemLowerCase}.html`;
        
    //     a.innerText = navbarItems[i];
    // }


}


/* 
1- crear el navbar
2- crear el ul
3- crear el li
4- agregar el li al ul
5- agregar el ul al navbar

*/