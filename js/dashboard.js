// Deposit Event Handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Get Deposit value
    const deposit = document.getElementById('user-deposit');
    const depositText = deposit.value;
    const depositAmount = parseFloat(depositText);
    console.log(depositAmount);
})