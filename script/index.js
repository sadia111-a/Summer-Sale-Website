let total=0;
function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById('selected-item')
    const count = selectedItemContainer.childElementCount;
    const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    
    const ol = document.createElement('ol');
    ol.innerHTML=`${count+1} . ${itemName}`;
    selectedItemContainer.appendChild(ol);
     
    const price = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0]
   
      total = parseFloat(total) + parseFloat(price);
      const firstTotal = document.getElementById('total').innerText=total;
      const disableBtn = document.getElementById('myButton');
      if(firstTotal >= 200){
        disableBtn.removeAttribute('disabled')
      }
      else{
        disableBtn.setAttribute('disabled',true)
      }
      return firstTotal;

      
      
      const discount = (firstTotal * 0.2).toFixed(2);
      
      const firstDiscount = document.getElementById('discount').innerText=discount;
      const finalTotal1 = firstTotal - firstDiscount;
      
      const finalTotal = document.getElementById('final-total').innerText=finalTotal1;
return finalTotal;
    }



document.getElementById('text-coupon').addEventListener('keyup',function(e){
  const text = e.target.value;
  const applyBtn = document.getElementById('myButton').addEventListener('click',function(){
    
  })
  if(text === 'SELL200'){
    const discount = (firstTotal * 0.2).toFixed(2);
    return discount;
  }
  
  else{
    return firstTotal;
  }

  const discount = (firstTotal * 0.2).toFixed(2);
  const firstDiscount = document.getElementById('discount').innerText=discount;
})
