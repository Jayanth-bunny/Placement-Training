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

export function deposit(id, amount) {
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

export function withdraw(id, amount) {
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

export function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  return customer.balance;
}

export function showTranctions(id) {
  const customer = customers.find((customer) => customer.id === id);
  if(customer) {
    return customer.transactions;
  }
  else {
    return "customer not found"
  }
}
