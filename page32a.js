let customers = [
  {
    id: 1,
    name: "cherry",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "benny",
    balance: 10000,
    transactions: [],
  },
  {
    id: 3,
    name: "jay",
    balance: 3000,
    transactions: [],
  },
];

function deposit(id, amount) {
  const customer = customers.find((customer) => customer.id === id);
  if (customer) {
    customer.balance += amount;
    customer.transactions = [
      ...customer.transactions,
      {
        type: "credit",
        amount: amount,
        date: Date.now(),
      },
    ];
    return "deposited successfully";
  }
  else {
    return "incorrect userId";
  }
}

function withdraw(id, amount) {
  const customer = customers.find((customer) => customer.id === id);
  if(customer) {
    if(amount > customer.balance) {
      return "insufficient funds";
    }
    customer.balance -= amount;
    customer.transactions = [
      ...customer.transactions,
      {
        type: "debit",
        amount: amount,
        date: Date.now(),
      },
    ];
    return "withdraw success";
  }
  else {
    return "incorrect userId";
  }
}

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  return customer.balance;
}

function showTranctions(id) {
  const customer = customers.find((customer) => customer.id === id);
  if(customer) {
    return customer.transactions;
  }
  else {
    return "customer not found"
  }
}

console.log(checkBalance(1))
console.log(deposit(1, 1000));
console.table(showTranctions(1));
console.log(withdraw(1, 500));
console.table(showTranctions(1));