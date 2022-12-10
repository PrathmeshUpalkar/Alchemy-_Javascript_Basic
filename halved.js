let numbers = [1,2,3,4,5,6,7,8,9] 
    let newArr = [];
   
    for(i=0;i<numbers.lenght;i++){
    
           const element = numbers[i];
           let halved = Math.floor(numbers[i]/2);
   
        if(element %2 !== 0){
            halved = halved + 1;
        }
   
        newArr.push(halved);
    }
    console.log(newArr);
    
   