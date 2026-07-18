const prompt=require("prompt-sync")();


function calculate (a,b,operation){
    return operation(a,b);}
        
    
    function add(a,b){
        process.stdout.write("Add...");
        return (a+b); 
    }
    function subtract(a,b){
        process.stdout.write("Subtract...");
        return (a-b);
    }
    function multiply(a,b){
        process.stdout.write("Multiply...");
        return (a*b);
    }
    function divide(a,b){
        process.stdout.write("Divide...");
        return  (a/b);
    }
    function modulus(a,b){
        process.stdout.write("Modulus...");
        return  (a%b);
    }
    function power(a,b){
        process.stdout.write("Power...");
        return  (a**b);
    }
    function exit(){
        console.log("Exiting the calculator...");
        process.exit();
    }
    



//const calculator=calculate;

while(true){
    console.log("-".repeat(25));
    process.stdout.write("Enter the first number: ");
    const a=parseFloat(prompt());
    process.stdout.write("Enter the second number : ");
    const b=parseFloat(prompt());
    const operations=[add, subtract, multiply, divide, modulus, power, exit]
    console.log("Select an operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Power");
    console.log("7. Exit");
    const op=prompt();
    console.log("-".repeat(25));
    console.log(calculate(a,b,operations[op-1]));
}