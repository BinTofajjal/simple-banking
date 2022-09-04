//=== Deposit Event Handler. ===//
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
    // Clearing input value afer Deposit.
    depositInput.value = '';
})

//=== Withdraw and Balance Handler. ===//

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Gatting withdraw Input value and Parsing it as a number.
    const withdrawInput = document.getElementById('user-withdraw');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputValue);
    // Getting Static withdrawal Balance and parsing it as a Number.
    const withdraw = document.getElementById('withdraw-amount');
    const withdrawValue = withdraw.innerText;
    const withdrawAmount = parseFloat(withdrawValue);
    // Adding Withdraw inputs to Withdraw Balance.
    const totalWithdraw = withdrawInputAmount + withdrawAmount;
    withdraw.innerText = totalWithdraw;
    // Clearing input value afer Withdraw.
    withdrawInput.value = '';
})