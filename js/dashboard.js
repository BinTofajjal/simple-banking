// Deposit Event Handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Getting Deposit value.
    const depositInput = document.getElementById('user-deposit');
    const depositInputText = depositInput.value;
    // Converting input value as Number.
    const depositInputAmount = parseFloat(depositInputText);
    // Adding Deposit value to Deposit Amount.
    const depositAmount = document.getElementById('deposit-amount');
    const depositValue = depositAmount.innerText;
    // Converting Existing value as Number.
    const depositValueAmount = parseFloat(depositValue);
    // Adding two values
    const newDeposit = depositValueAmount + depositInputAmount;
    // Setting up Deposit input Value to Deposit Amount.
    depositAmount.innerText = newDeposit;
    // Balance adjustment afer Deposit.
    const balance = document.getElementById('balance-amount');
    // Getting Current Balance and it's Value.
    const balanceValueText = balance.innerText;
    const balanceValue = parseFloat(balanceValueText);
    // Adding Deposit value with input Deposit.
    const balanceAfDeposit = balanceValue + depositInputAmount;
    balance.innerText = balanceAfDeposit;


    // Clear input value afer Deposit.
    depositInput.value = '';
})