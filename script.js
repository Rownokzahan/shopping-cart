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
    let currentPhonePrice = document.getElementById(priceId);
    let price = parseInt(singlePrice) *itemNo;
    currentPhonePrice.innerText =price;
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

let x = document.getElementById('current-phone-price').innerText;
console.log(x);
