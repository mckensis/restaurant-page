import Nav from './Nav.js';
import buildHome from './buildHome.js';
import buildContact from './buildContact.js';
import buildMenu from './buildMenu.js';

import './style.css';

window.addEventListener("load", buildPage);

function removeElements(content) {
    while (content.childNodes.length > 1) {
        content.removeChild(content.lastChild);
    }
}

function updateActiveTab(nav) {

    for (const item of nav) {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    }
}

function buildSection(section, mainContent, navbar) {

    let item;

    updateActiveTab(navbar);

    switch (section.textContent) {
        case "Home":
            item = buildHome();
            break;
        case "Menu":
            item = buildMenu();
            break;
        case "Contact":
            item = buildContact();
            break;
    }

    removeElements(mainContent);
    section.classList.add("active");

    mainContent.appendChild(item);

}

function buildPage() {

    const content = document.querySelector(".content");
    content.appendChild(Nav());
    const navbar = document.querySelector(".navbar").childNodes;
    
    content.appendChild(buildHome());

    for (const listItem of navbar) {
        listItem.addEventListener("click", (e) => {
            const navItem = e.target;
            buildSection(navItem, content, navbar);
        });
    }

};