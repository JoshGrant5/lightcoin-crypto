/*
* Allow multiple accounts to be created
* Each account can have many transactions
* Allow withdrawals and deposits into accounts
* Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
* Allow us to retrieve the current balance of the account at any time
* Don't allow withdrawals that exceed the remaining balance of the account
*/

class Account {

  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.history = [];
  }

  withdrawal(amount) {
    if (amount < this.balance) {
      console.log(`${amount} withdrawn from account: ${this.name}`);
      this.balance -= amount;
      console.log(`New balance: ${this.balance}`);
      this.history.push(`Withdrawl: ${amount}`);
    } else {
      console.log('Error: Insufficient funds');
    }
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited into account: ${this.name}`);
    console.log(`New balance: ${this.balance}`);
    this.history.push(`Deposit: ${amount}`);
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

let account1 = new Account('Chequing', 1000);
console.log(account1);
account1.withdrawal(200);
account1.deposit(50);
console.log(account1.history);
console.log(account1.balance);
account1.withdrawal(10000);
