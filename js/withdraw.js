document.getElementById('btn-withdraw').addEventListener('click',function(){

  const newWithDrawField = document.getElementById('withdraw-field');
  const newWithDrawFieldString =newWithDrawField.value;
  const newWithDrawFieldAmount =parseFloat(newWithDrawFieldString);


const previousWithDraw = document.getElementById('withdraw-total');
const previousWithDrawString = previousWithDraw.innerText;
const previousWithDrawAmount =parseFloat(previousWithDrawString);
const totalWithdraw =newWithDrawFieldAmount + previousWithDrawAmount;
previousWithDraw.innerText =totalWithdraw;

newWithDrawField.value='';

const previousBalance =document.getElementById('balance-total');
const previousBalanceString = previousBalance.innerText;
const previousBalanceAmount =parseFloat(previousBalanceString);
const totalCurrentAmount = previousBalanceAmount- newWithDrawFieldAmount;
previousBalance.innerText = totalCurrentAmount;


})
