const prompt =require("prompt-sync")();


const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lower = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function first4Element(){
    const arr=[];
    arr.push(upper[Math.floor(Math.random()*upper.length)])
    arr.push(lower[Math.floor(Math.random()*lower.length)])
    arr.push(numbers[Math.floor(Math.random()*numbers.length)])
    arr.push(symbols[Math.floor(Math.random()*symbols.length)])
    return arr;
}
function main(){
    console.log("WELCOME TO PASSWORD GENERATOR\n"+"-".repeat(50))
    while(true){
        const start=prompt("want to create password(Y/N) : ").toUpperCase();
        
            if(start==="N"){
                console.log("EXITING...");return;
            }
            else if(start==="Y"){
                console.log("1. manual character-type selection\n2. default(all-type) ");
                const type=parseInt(prompt());
                
                let arr=[];
                if(2===type){
                    const n=parseInt(prompt("Length of password must be >=4: "));
                    if(n<4){
                        console.log("ERROR: non-eligible length\n"+"-".repeat(50))
                        continue;
                    }
                    arr=first4Element();
                    const pool1=upper+lower+numbers+symbols;
                    for(let i=4;i<n;i++){
                        arr.push(pool1[Math.floor(Math.random()*pool1.length)])
                    }
                }
                else if (1===type){
                    const charactertype={upper:upper,lower:lower,numbers:numbers,symbols:symbols}
                    const keys=Object.keys(charactertype);
                    console.log("choose character type : \n"+"-".repeat(50));
                    let count=0;
                    let pool2="";
                    for(const key of keys){
                        if("Y"===prompt(`${key}?(y/n) : `).toUpperCase()){
                            arr.push(charactertype[key][Math.floor(Math.random()*(charactertype[key].length))]);
                            pool2 +=charactertype[key];
                            count++;
                        }
                    }
                    if(0===count){
                        console.log("must accept one charcter type");continue;
                    }
                    const n=parseInt(prompt(`Length of password must be >=${count}: `));
                    if(n<count){
                        console.log("ERROR: non-eligible length\n"+"-".repeat(50))
                        continue;
                    }
                    for(let i=count;i<n;i++){
                        arr.push(pool2[Math.floor(Math.random()*pool2.length)])
                    }
                }
                else{
                console.log(`please input the valid operation...`);
                continue;

            }
                arr=shuffle(arr)
                const password=arr.join("");
                console.log(`${"-".repeat(50)}\n${password}\n${"-".repeat(50)}`)
                //password strength...
                if(password.length<=8)console.log("WEAK PASSWORD")
                else if(password.length>8 && password.length<12)console.log("MODERATE PASSWORD")
                else console.log("STRONG PASSWORD")
                
            }
            else{
                console.log(`please input the valid operation\nrestarting....`);
                continue;

            }
    }

    

}

main();