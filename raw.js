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
function getwithdrawBalance(inputAmnt) {
    const inputAmount = document.getElementById(inputAmnt)
    const inputAmountText = inputAmount.value
    const newInputAmount = parseFloat(inputAmountText)
    inputAmount.value = ''
    return newInputAmount
}
document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInput = getwithdrawBalance("withdraw-input");
    const withdrawBalance = document.getElementById("withdraw-total")
    const withdrawBalanceText = withdrawBalance.innerText;
    const NewwithdrawBalance = parseFloat(withdrawBalanceText)
    withdrawBalance.innerText = withdrawInput + NewwithdrawBalance

})

// withdraw and balance
function getUpdateBalance(balance) {
    const BalanceTotal = document.getElementById(balance);
    const balanceTotalText = BalanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newwithdrawAmount = getUpdateBalance('withdraw-total');
    const balanceAmount = document.getElementById("balance-total");
    const balanceAmountText = balanceAmount.innerText
    const newBalaceAmount = parseFloat(balanceAmountText);
    balanceAmount.innerText = newBalaceAmount - newwithdrawAmount

})