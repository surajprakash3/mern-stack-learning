
let currentBalance = 5000;


document.getElementById("balance").value = currentBalance;

function adddeposit() {
    const amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    currentBalance += amount;
    document.getElementById("balance").value = currentBalance;
}

function addwithdrawal() {
    const amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    if (amount > currentBalance) {
        alert("Insufficient balance");
        return;
    }

    currentBalance -= amount;
    document.getElementById("balance").value = currentBalance;
}

function addgetbalance() {
    document.getElementById("balance").value = currentBalance;
}
