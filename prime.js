const number = parseInt(prompt("Enter a positive number"));
let isPrime = true;
if(number===1){
    console.log("1 is neither prime or compositve number");
}
else if(number > 1){
    for(let i=2; i<number; i++){
        if (number % i == 0){
            isPrime = false;
            break;
        }
    }
        if(isPrime){
            console.log(`${number} is a prime number`);
        }
        else{
            console.log(`${number} is not a prime number`);
        }

        }
   
else{
    console.log("the number is not a prime number");
}

