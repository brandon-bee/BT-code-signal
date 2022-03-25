// write a function that takes an amount to withdraw from an account, and the current balance
// if there isn't enough in the account to make the withdrawal, return -1
// otherwise return the remaining balance after the withdrawal

function withdraw(amount, balance) {
    if (amount > balance) {
        return -1;
    }
    return balance - amount;

    // Ternary

    // return (amount > balance) ? -1 : balance - amount;
}