function getinputValue(feildId) {
    const inputField = document.getElementById(feildId);
    const valueText = inputField.value;
    const value = parseFloat(valueText);
    inputField.value = '';
    return value
}
function updateTotal(feildId, amount) {
    // console.log(feildId, amount)
    const totaltag = document.getElementById(feildId);
    const previousTotalInText = totaltag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totaltag.innerText = newTotal
}
document.getElementById("deposit-button").addEventListener('click', function () {
    const amount = getinputValue('deposit-input');
    // console.log(amount);
    updateTotal('deposit-total', amount)

})
function updateBalance(amount) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText
    previousBalance = parseFloat(balanceInText);
    const newBalance = previousBalance + amount;
    balanceTag.innerText = newBalance
}

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getinputValue('withdraw-input');
    updateTotal('withdraw-total', amount)
    updateBalance('')
})