const prompt=require("prompt-sync")();
console.log("Enter a number to print multiplication table");
let num=prompt();
console.log("");
for(let i=1;i<=10;i++){
    console.log(num + " x " +i + " = " + num*i);
}