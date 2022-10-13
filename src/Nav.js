function Nav() {
    const header = document.createElement('h1');
    const nav = document.createElement('div');
    
    const navbar = document.createElement('ul');
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");
    
    header.textContent = "Chapati";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    home.classList.add("active");

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    nav.appendChild(header);
    nav.appendChild(navbar);

    navbar.classList.add("navbar");
    nav.classList.add("nav");

    return nav;
}

export default Nav;