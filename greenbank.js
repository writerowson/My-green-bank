function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const InputAmountTxt = inputField.value;
    const amountValue = parseFloat(InputAmountTxt)
    // clear input feild
    inputField.value = ''
    return amountValue
}
// Please Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText
    const previousTotal = parseFloat(depositTotalText)
    depositTotal.innerText = depositAmount + previousTotal

})
// deposit and Balance
function getCurrentBalance(balanceDefault) {
    const BalanceTotal = document.getElementById(balanceDefault);
    const balanceTotalText = BalanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getCurrentBalance('deposit-total');
    const balanceAmount = document.getElementById("balance-total");
    const balanceAmountText = balanceAmount.innerText
    const newBalaceAmount = parseFloat(balanceAmountText);
    balanceAmount.innerText = newDepositAmount + newBalaceAmount

})
// please Withdraw
