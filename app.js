// Input fild amaount 
function getInputValue(InputId) {
    const inputFild = document.getElementById(InputId);
    const inputFildText = inputFild.value;
    const inputAmaount = parseFloat(inputFildText);
    return inputAmaount;

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
        document.getElementById('error-amaount').style.display = 'block';
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
    const incomeMonay = getInputValue('totleIncome');
    const foodMonay = getInputValue('foodAmaound');
    const rentMonay = getInputValue('rentAmaount');
    const clothesMonay = getInputValue('clothesAmaount');
    if (foodMonay > 0 && rentMonay > 0 && clothesMonay > 0 && incomeMonay > 0) {
        getcalculate()
    }
    else {

        document.getElementById('error-input').style.display = 'block';
    }
})

// saving amaount 
function savingMonay() {
    const incomeMonay = getInputValue('totleIncome');
    const saving = getInputValue('save-monay');
    const savingAmaount = incomeMonay * saving / 100;
    return savingAmaount;
}

// remaining balance 
function remainingBalance() {
    const totleExpensesMonay = monayExpenses();
    const incomeMonay = getInputValue('totleIncome');
    const totleAmaount = incomeMonay - totleExpensesMonay;
    const savingBalance = savingMonay();
    const savingAmaountFild = document.getElementById('saving');
    const remainingAmaountFild = document.getElementById('remainingBalace');
    if (savingBalance < totleAmaount) {
        // saving amaount
        savingAmaountFild.innerText = savingBalance;

        // remaining balance 
        remainingAmaountFild.innerText = totleAmaount - savingBalance;
    }
    else {
        document.getElementById('error-amaount').style.display = 'block';
    }
}

// save button 
document.getElementById('sevingBtn').addEventListener('click', function () {
    const saving = getInputValue('save-monay');
    if (saving > 0) {
        remainingBalance()
    }
    else {
        document.getElementById('error-input').style.display = 'block';
    }
})