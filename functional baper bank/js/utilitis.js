function getInputValueById(inputFieldId){

  const inputField = document.getElementById(inputFieldId);
  const  inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value='';
  return inputFieldValue;
}

function getElementValueId(elementId){
  const textElement  =document.getElementById(elementId);
  const elementFieldString =textElement.innerText;
  const elementFieldValue =parseFloat(elementFieldString);
  return elementFieldValue;
}

function setTextElementValueById(elementId , newValue){
   const textElement =document.getElementById(elementId);
         textElement.innerText = newValue;
}
