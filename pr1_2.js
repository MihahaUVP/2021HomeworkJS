function solve(num,accuracy){
    if(accuracy > 15){
        accuracy = 15;
    }
    num = num.toFixed(accuracy);
    num = parseFloat(num);
    console.log(num);
}

solve(3.14151232400000000,15);