



document.getElementById('btn-deposit').addEventListener('click',function(){
// console.log('click');



const newDepositAmount =getInputValueById('deposit-field');
const elementValue = getElementValueId('deposit-total')
// console.log(newDepositAmount);


// console.log(elementValue);
const newDepositTotal = newDepositAmount+elementValue;
setTextElementValueById('deposit-total', newDepositTotal);

const previousBalanceTotal =getElementValueId('balance-total') ;
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById('balance-total',newBalanceTotal);

})