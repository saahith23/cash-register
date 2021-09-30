const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll("#no-of-notes")

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAmountAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {

        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)
        } else {
            showMessage("the cash provided should atleast be equal to the bill amount");
        }
    } else {
        showMessage("Invalid bill Amount");
    }
});


function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        
        amountToBeReturned = amountToBeReturned % availableNotes[i];
       
    
        numberOfNotes[i].innerText = noOfNotes;
    }

}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;

}