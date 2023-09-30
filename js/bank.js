document.getElementById('btn-deposit').addEventListener('click',function(){

  const newDepositField =document.getElementById('deposit-field');
  const newDepositFieldString = newDepositField.value;
  const newDepositAmount = parseFloat(newDepositFieldString);



  const DepositTotalElement =document.getElementById('deposit-total'); 
  const previousDepositString = DepositTotalElement.innerText;
  const previousDepositAmount = parseFloat(previousDepositString);
  const currentTotal = newDepositAmount + previousDepositAmount;
  DepositTotalElement.innerText = currentTotal;
  newDepositField.value ='';



  const previousBalance = document.getElementById('balance-total');
  const previousBalanceString = previousBalance.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceString);
  const totalAmount = previousBalanceAmount + newDepositAmount;
previousBalance.innerText = totalAmount;





})