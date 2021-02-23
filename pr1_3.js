function solve(number){
    if(number%10 ==0){
        console.log("Число делится на 10");
    } else
    if(number%6 ==0){
        console.log("Число делится на 6");
    } else
    if(number%3 ==0){
        console.log("Число делится на 3");
    } else
    if(number%2 ==0){
        console.log("Число делится на 2");
    } else console.log("Не делится")
}
solve(15);
solve(12);
solve(1643);