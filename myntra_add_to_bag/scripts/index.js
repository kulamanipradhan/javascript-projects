let bagItem;
appOnLoad()
function appOnLoad()
{
let bagItemStr = localStorage.getItem('bagItem');
bagItem = bagItemStr ? JSON.parse(bagItemStr):[];
displayItemsOnHomePage();
displaybagIcon()
}


function addToBag(itemId)
{
bagItem.push(itemId);
localStorage.setItem('bagItem',JSON.stringify(bagItem));
displaybagIcon();
console.log(itemId);
}
function displaybagIcon()
{
    let bagItemCountElement =document.querySelector(".bag-item-count");
    if(bagItem.length>0)
    {
        bagItemCountElement.innerText = bagItem.length;
        bagItemCountElement.style.visibility = 'visible';
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
   
}
function displayItemsOnHomePage()
{
    let itemscontainerElement = document.querySelector(".items-container")
    if(!itemscontainerElement)
    {
        return;
    }
    let innerHtml= '';
    
    items.forEach(item =>
        {
            innerHtml +=` <div class="item-container">
            <img class="item-img" src="${item.item_image}" alt="item image" srcset="">
            <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count} 
            </div>
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount">(Rs ${item.discount_percentage} %)</span>
            </div>
            <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
            </div>`
            
    
        });
    
    
    
    
    itemscontainerElement.innerHTML = innerHtml;
}



