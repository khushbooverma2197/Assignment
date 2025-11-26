//Question 1

function createCounter() {

  let count = 0; // private variable

  return {

    increment: function () {

      count++;

      console.log("Current count:", count);

    },

    decrement: function () {

      count--;

      console.log("Current count:", count);

    }

  };

}
 
const counter1 = createCounter();

counter1.increment(); // 1

counter1.increment(); // 2

const counter2 = createCounter();

counter2.increment(); // 1 (separate counter)


///Question 2
function createBankAccount() {

  let balance = 0; // private variable

  let transactions = []; // for Q2.3 transaction history

  return {

    deposit: function (amount) {

      balance += amount;

      transactions.push(`Deposited: ${amount}`);

      console.log("Deposited:", amount);

    },

    withdraw: function (amount) {

      if (amount > balance) {

        console.log("Insufficient balance");

      } else {

        balance -= amount;

        transactions.push(`Withdrew: ${amount}`);

        console.log("Withdrawn:", amount);

      }

    },

    getBalance: function () {

      console.log("Current balance:", balance);

      return balance;

    },

    getHistory: function () {

      console.log("Transaction History:", transactions);

      return transactions;

    }

  };

}
 
const counter = createCounter();

counter.increment(); // Current count: 1

counter.increment(); // Current count: 2

counter.decrement(); // Current count: 1

const account = createBankAccount();

account.deposit(500);   // Deposited: 500

account.withdraw(200);  // Withdrawn: 200

account.withdraw(400);  // Insufficient balance

console.log(account.balance); // undefined (private)

account.getBalance();   // Current balance: 300

account.getHistory();   // Shows transaction list
 
