import {checkBalance, deposit, showTranctions, withdraw} from "./page32A.js";
console.log(checkBalance(1))
console.log(deposit(1, 1000));
console.table(showTranctions(1));
console.log(withdraw(1, 500));
console.table(showTranctions(1));