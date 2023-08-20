let total=0;
function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById('selected-item')
    const count = selectedItemContainer.childElementCount;
    const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    
    const ol = document.createElement('ol');
    ol.innerHTML=`${count+1} . ${itemName}`;
    selectedItemContainer.appendChild(ol);
     
    const price = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0]
    // console.log(target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0])
      total = parseFloat(total) + parseFloat(price);
      const firstTotal = document.getElementById('total').innerText=total;
      
    
    
    



}