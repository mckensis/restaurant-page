import Img from './map.png';

function buildContact() {

    const map = new Image();

    const list = document.createElement('ul');
    const tel = document.createElement('div');
    const email = document.createElement('div');
    
    const telName = document.createElement('h4');
    const telNo = document.createElement('p');
    
    const emailName = document.createElement('h4');
    const emailAddress = document.createElement('p');

    list.classList.add("contact");
    map.classList.add("map");

    map.src = Img;

    telName.textContent = "Telephone: ";
    emailName.textContent = "Email: ";
    emailAddress.textContent = "welovechapatis@chapati.com";
    telNo.textContent = "0141 423 1627";

    tel.appendChild(telName);
    tel.appendChild(telNo);

    email.appendChild(emailName);
    email.appendChild(emailAddress);
    
    const contact = document.createElement("div");
    contact.classList.add("contact");
    
    list.appendChild(tel);
    list.appendChild(email);

    contact.appendChild(list);
    contact.appendChild(map);

    return contact;
}

export default buildContact;