const billAmount = document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const message = document.querySelector("#error-message");


checkButton.addEventListener("click", function validateBillAmountAndCashAmount()
{
   hideMessage();
 if (billAmount.value>0){
if (cashGiven.value>= billAmount.value){
const amountToBeReturned = cashGiven.value- billAmount.value;
calculateChange(amountToBeReturned)
}else{
showMessage=("the cash provided should atleast be equal to the bill amount");
}
    }


else{
   showMessage("Invalid bill Amount");
});

// function calculateChange(){

// }
function hideMessage(){
    message.style.display ="none";
}
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;

}
