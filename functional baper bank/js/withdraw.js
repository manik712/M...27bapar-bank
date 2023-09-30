document.getElementById('btn-withdraw').addEventListener('click',function(){


const newWithDrawAmount = getInputValueById('withdraw-field');
const previousWithDraw = getElementValueId('withdraw-total');
// console.log(previousWithDraw);

const withDrawTotal =newWithDrawAmount + previousWithDraw;

setTextElementValueById('withdraw-total', withDrawTotal);


const previousWithDrawBalance = getElementValueId('balance-total');
// console.log(withDrawBalance);

const leftWithDrawBalance = previousWithDrawBalance - newWithDrawAmount;
setTextElementValueById('balance-total',leftWithDrawBalance);
})