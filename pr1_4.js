var summ;
function holidays(numberOfPeople,typeOfPeople,day){
    if(typeOfPeople=="Students"){
    let price;
       if(day=="Friday"){
        price = 8.45;
       } else
       if(day=="Saturday"){
        price = 9.80;
       } else
       if(day=="Sunday"){
        price = 10.46;
       }
       if(numberOfPeople >= 30){
           console.log("Total price: "+(price*numberOfPeople *0.85).toFixed(2));
       } else{
           console.log("Total price: "+(price*numberOfPeople).toFixed(2));
       }
    } else
    if(typeOfPeople=="Cooperative"){
        let price;
           if(day=="Friday"){
            price = 10.9;
           } else
           if(day=="Saturday"){
            price = 15.6;
           } else
           if(day=="Sunday"){
            price = 16;
           }
           if(numberOfPeople >= 100){
               console.log("Total price: "+(price*numberOfPeople *0.9).toFixed(2));
           } else{
               console.log("Total price: "+(price*numberOfPeople).toFixed(2));
           }
        } else
        if(typeOfPeople=="Regular"){
            let price;
               if(day=="Friday"){
                price = 15;
               } else
               if(day=="Saturday"){
                price = 20;
               } else
               if(day=="Sunday"){
                price = 22.50;
               }
               if(numberOfPeople >= 10 && numberOfPeople<=20){
                   console.log("Total price: "+(price*numberOfPeople *0.95).toFixed(2));
               } else{
                   console.log("Total price: "+(price*numberOfPeople).toFixed(2));
               }
            }
}


holidays(30,"Students","Sunday");
holidays(40,"Regular","Saturday");