// Input fild amaount 
function getInputValue(InputId) {
    const inputFild = document.getElementById(InputId);
    const inputFildText = inputFild.value;
    const inputAmaount = parseFloat(inputFildText);
    return inputAmaount;

}

// error input 
function erroreInput() {
    const inputsFild = document.getElementsByClassName('input-monay');
    for (const inputs of inputsFild) {
        const inputText = inputs.value;
        return inputText;
    }
}

// Expenses area 
function monayExpenses() {
    const foodMonay = getInputValue('foodAmaound');
    const rentMonay = getInputValue('rentAmaount');
    const clothesMonay = getInputValue('clothesAmaount');
    const totleExpenses = foodMonay + rentMonay + clothesMonay;
    return totleExpenses;
}

// calculate amaount 
function getcalculate() {
    const totleExpensesMonay = monayExpenses();
    const totleExpensesAmaount = document.getElementById('totleExpanses');
    // balance update 
    const incomeMonay = getInputValue('totleIncome');

    if (totleExpensesMonay > incomeMonay) {
        alert('hi');
    }
    else {
        // totle Expenses Amaount
        totleExpensesAmaount.innerText = totleExpensesMonay;
        // balance text 
        const totleBalanceFild = document.getElementById('totleBalance');
        totleBalanceFild.innerText = incomeMonay - totleExpensesMonay;
    }
}

// calculate button 
document.getElementById('calculateBtn').addEventListener('click', function () {
    const inputError = erroreInput();
    if (inputError > 0 && inputError != 'number') {
        alert('Taposh')
    }
    else {
        getcalculate()
    }

})

