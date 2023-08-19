function handleClickBtn(target){
    const selectedItemContainer = document.getElementById('selected-item')
    // const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const itemName1 = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const itemName2 = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
    const itemName3 = target.parentNode.childNodes[5].childNodes[3].childNodes[3].innerText;
    // console.log(itemName3);
    
    const li1 = document.createElement('li')
    li1.innerText = itemName1;
   
    const li2 = document.createElement('li')
    li2.innerText = itemName2;

    const li3 = document.createElement('li')
    li3.innerText = itemName3;

    selectedItemContainer.appendChild(li1);
    selectedItemContainer.appendChild(li2);
    selectedItemContainer.appendChild(li3);
    // selectedItemContainer.appendChild(li2);
    
}