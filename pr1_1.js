function solve(age){
    if(age>0 && age<=2){
        console.log("младенец");
    } else
    if(age <=13){
        console.log("ребёнок");
    } else
    if(age<= 19){
        console.log("подросток");
    } else
    if(age<=65){
        console.log("взрослый");
    }
    if(age>=66){
        console.log("пожилой");
    }
}
solve(20);
solve(1);
solve(100);