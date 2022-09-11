let tres = 3;
let cinco = 5;

for (let i = 1; i <= 100; i++) {
    if ((i % tres == 0) && (i % cinco == 0)) {
        console.log("FizzBuzz");
    } else if (i % tres == 0){
        console.log("Fizz")
    } else if (i % cinco == 0){
        console.log("Buzz")
    } else{
        console.log(i);
    }
    
}