// Deposit Event Handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Get Deposit value.
    const depositInput = document.getElementById('user-deposit');
    const depositInputText = depositInput.value;
    // Converting input value as Number.
    const depositInputAmount = parseFloat(depositInputText);
    // Add Deposit value to Deposit Amount.
    const depositAmount = document.getElementById('deposit-amount');
    const depositValue = depositAmount.innerText;
    // Converting Existing value as Number.
    const depositValueAmount = parseFloat(depositValue);
    // Adding two values
    const newDeposit = depositValueAmount + depositInputAmount;
    // Setting up Deposit input Value to Deposit Amount.
    depositAmount.innerText = newDeposit;
    // Clear input value afer Deposit.
    depositInput.value = '';
})