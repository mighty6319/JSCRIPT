function createAccount(initial_balance){
    
    return{
        
        deposit: function(amount){
           initial_balance += amount;return "";

        },
        withdraw: function(amount){
            initial_balance -= amount;return "";
        },
        checkBalance: function(){
            console.log("Your current balance is: " + initial_balance);
        }
    }
}
const prompt = require("prompt-sync")();

const money =function(){
    process.stdout.write("Enter the initial_amount : ");
    let initial_balance=parseFloat(prompt());
    return initial_balance;
}

const am=function(){
    process.stdout.write("Enter the amount : ");
    let amount=parseFloat(prompt());
    return amount;
}
//initiaizing the account with initial balance
const  Ayush= createAccount(money());

console.log("DEPOSIT");
console.log(Ayush.deposit(am()));


console.log("WITHDRAW");
console.log(Ayush.withdraw(am()));
Ayush.checkBalance();
    
