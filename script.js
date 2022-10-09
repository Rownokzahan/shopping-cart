function increaseItem(itemId,priceId,singlePrice){
    let ItemNum = document.getElementById(itemId);
    ItemNum.value++;
    updatePrice(ItemNum.value,priceId,singlePrice);
}

function decreaseItem(itemId,priceId,singlePrice){
    let currentNum = document.getElementById(itemId);
    currentNum.value--;
    updatePrice(currentNum.value,priceId,singlePrice);
}

function updatePrice(itemNo,priceId,singlePrice){
    let currentPrice = document.getElementById(priceId);
    let price = parseInt(singlePrice) *itemNo;
    currentPrice.innerText =price;


    // Calculating Sub Total
    let phonePrice = document.getElementById('current-phone-price').innerText;
    let coverPrice = document.getElementById('current-cover-price').innerText;
    let subTotal = document.getElementById('subTotal');
    subTotal.innerText= parseInt(phonePrice)+parseInt(coverPrice);

    // Calculating Total
    let tax =9.45;
    let total = parseInt(subTotal.innerText) + parseFloat(tax);
    document.getElementById('total').innerText = total;
}

document.getElementById('plus-btn').addEventListener('click',function(){
    increaseItem('noPhone','current-phone-price',1219);
});
document.getElementById('minus-btn').addEventListener('click', function(){
    decreaseItem('noPhone','current-phone-price',1219);
});

document.getElementById('cover-plus').addEventListener('click',function(){
    increaseItem('cover-num','current-cover-price',59);
});

document.getElementById('cover-minus').addEventListener('click', function(){
    decreaseItem('cover-num','current-cover-price',59);
});

// Removing Cart Item
function removeitem(item,itemPrice){
    let totalItemPrice = document.getElementById(itemPrice).innerText;
    document.getElementById('subTotal').innerText= (document.getElementById('subTotal').innerText)- totalItemPrice;
    document.getElementById('total').innerText = (document.getElementById('total').innerText)- totalItemPrice;
    document.getElementById(item).style.display = "none";
}

// Removing Phone Item
document.getElementById('remove-phone').addEventListener('click',function(){
    removeitem('item-phone','current-phone-price');
});

// Removing Item(Phone Case )
document.getElementById('remove-case').addEventListener('click',function(){
    removeitem('item-case','current-cover-price');
});
