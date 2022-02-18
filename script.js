// function getInputValue(inputAmount) {
//     const inputField = document.getElementById(inputAmount)
//     const InputAmountTxt = inputField.value;
//     const amountValue = parseFloat(InputAmountTxt)
//     // clear input field
//     inputField.value = ''
//     return amountValue
// }
// // Please Deposit
// document.getElementById('deposit-button').addEventListener('click', function () {
//     const depositAmount = getInputValue('deposit-input');
//     const depositTotal = document.getElementById('deposit-total');
//     const depositTotalText = depositTotal.innerText
//     const previousTotal = parseFloat(depositTotalText)
//     depositTotal.innerText = depositAmount + previousTotal
// })
// // please Withdraw
// document.getElementById("withdraw-button").addEventListener('click', function () {
//     const withdrawInput = getInputValue("withdraw-input");
//     const withdrawBalance = document.getElementById("withdraw-total")
//     const withdrawBalanceText = withdrawBalance.innerText;
//     const NewwithdrawBalance = parseFloat(withdrawBalanceText)
//     withdrawBalance.innerText = withdrawInput + NewwithdrawBalance
// })
// // deposit and Balance
// function getUpdateBalance(balance, balanceNew) {
//     const BalanceTotal = document.getElementById(balance, balanceNew);
//     const balanceTotalText = BalanceTotal.innerText;
//     const previousbalanceTotal = parseFloat(balanceTotalText);
//     return previousbalanceTotal;
// }
// document.getElementById('deposit-button').addEventListener('click', function () {
//     const newDepositAmount = getUpdateBalance('deposit-total');
//     const balanceAmount = document.getElementById("balance-total");
//     const balanceAmountText = balanceAmount.innerText
//     const newBalaceAmount = parseFloat(balanceAmountText);
//     balanceAmount.innerText = newDepositAmount + newBalaceAmount
// })
// // withdraw and balance
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const newwithdrawAmount = getUpdateBalance('withdraw-total');
//     const balanceAmount = document.getElementById("balance-total");
//     const balanceAmountText = balanceAmount.innerText
//     const newBalaceAmount = parseFloat(balanceAmountText);
//     balanceAmount.innerText = newBalaceAmount - newwithdrawAmount

// })

