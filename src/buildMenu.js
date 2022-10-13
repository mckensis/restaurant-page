function menuInfo() {

    const info = document.createElement('p');
    
    info.classList.add("menuInfo");
    info.textContent = "fresh homemade chapati filled to the brim with sweet potato rice / spinach / mango chutney or lime pickle / your choice of topping";

    return info;
}

function itemOne() {

    const itemOneDiv = document.createElement('div');
    const itemOneName = document.createElement('h4');
    const itemOnePrice = document.createElement('p');
    const itemOneInfo = document.createElement('span');

    itemOneName.textContent = "One";
    itemOnePrice.textContent = "£8";
    itemOneInfo.textContent = "lentil dal";
    
    itemOneDiv.classList.add("item");

    itemOneDiv.appendChild(itemOneName);
    itemOneDiv.appendChild(itemOnePrice);
    itemOneDiv.appendChild(itemOneInfo);

    return itemOneDiv;
}

function itemTwo() {

    const itemTwoDiv = document.createElement('div');
    const itemTwoName = document.createElement('h4');
    const itemTwoPrice = document.createElement('p');
    const itemTwoInfo = document.createElement('span');

    itemTwoName.textContent = "Two";
    itemTwoPrice.textContent = "£8";
    itemTwoInfo.textContent = "dal makhani"
    
    itemTwoDiv.classList.add("item");
    itemTwoDiv.appendChild(itemTwoName);
    itemTwoDiv.appendChild(itemTwoPrice);
    itemTwoDiv.appendChild(itemTwoInfo);

    return itemTwoDiv;
}

function itemThree() {

    const itemThreeDiv = document.createElement('div');
    const itemThreeName = document.createElement('h4');
    const itemThreePrice = document.createElement('p');
    const itemThreeInfo = document.createElement('span');

    itemThreeName.textContent = "Three";
    itemThreePrice.textContent = "£12";
    itemThreeInfo.textContent = "double chapati with double topping"
    
    itemThreeDiv.classList.add("item");
    itemThreeDiv.appendChild(itemThreeName);
    itemThreeDiv.appendChild(itemThreePrice);
    itemThreeDiv.appendChild(itemThreeInfo);

    return itemThreeDiv;
}

function buildMenu() {

    const menu = document.createElement('div');

    menu.classList.add('menu');


    menu.appendChild(menuInfo());
    menu.appendChild(itemOne()); 
    menu.appendChild(itemTwo());
    menu.appendChild(itemThree());


    return menu;
}

export default buildMenu;