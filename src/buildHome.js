import Img from './Image.jpg';

function buildHome() {

    const img = new Image();
    img.classList.add("mainImage");
    img.src = Img;

    const aboutPara = document.createElement('p');
    
    aboutPara.textContent =
        'Chapati was born out of our love for wrapping absolutely any foods we can get our hands on inside a tasty vessel and transporting the whole thing directly into our belly.';
    aboutPara.classList.add("about");

    const home = document.createElement('div');
    
    home.appendChild(aboutPara);
    home.appendChild(img);

    home.classList.add("home");

    return home;
}

export default buildHome;