// filename: complex_program.js

/*
This code is a complex program that simulates a banking system,
allowing users to create accounts, deposit and withdraw money, and view their transaction history.
It leverages objects, classes, and various JavaScript concepts to achieve its functionality.
Please note that this is a simplified version and some features may not be implemented.
*/

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactionHistory.push({
        type: 'Deposit',
        amount: amount,
        date: new Date().toISOString(),
      });
      console.log(`Deposit of ${amount}$ successful.`);
    } else {
      console.log('Invalid deposit amount.');
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.transactionHistory.push({
          type: 'Withdrawal',
          amount: amount,
          date: new Date().toISOString(),
        });
        console.log(`Withdrawal of ${amount}$ successful.`);
      } else {
        console.log('Insufficient funds.');
      }
    } else {
      console.log('Invalid withdrawal amount.');
    }
  }

  getTransactionHistory() {
    console.log('Transaction History:');
    for (let transaction of this.transactionHistory) {
      console.log(
        `${transaction.type} of ${transaction.amount}$ on ${transaction.date}`
      );
    }
  }
}

const bank = {
  accounts: [],

  createAccount(name, initialBalance) {
    const newAccount = new Account(name, initialBalance);
    this.accounts.push(newAccount);
    console.log(`Account created for ${name}.`);
  },

  deposit(accountName, amount) {
    const account = this.getAccountByName(accountName);
    if (account) {
      account.deposit(amount);
    } else {
      console.log(`Account "${accountName}" not found.`);
    }
  },

  withdraw(accountName, amount) {
    const account = this.getAccountByName(accountName);
    if (account) {
      account.withdraw(amount);
    } else {
      console.log(`Account "${accountName}" not found.`);
    }
  },

  getAccountByName(name) {
    return this.accounts.find((account) => account.name === name);
  },
};

// Test the program
bank.createAccount('Alice', 1000);
bank.createAccount('Bob', 500);

bank.deposit('Alice', 250);
bank.withdraw('Bob', 100);
bank.deposit('Alice', 50);

const aliceAccount = bank.getAccountByName('Alice');
aliceAccount.getTransactionHistory();

const bobAccount = bank.getAccountByName('Bob');
bobAccount.getTransactionHistory();