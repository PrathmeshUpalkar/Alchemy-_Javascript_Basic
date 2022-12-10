// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.

// Modify the array directly and do not return anything from this function.
function rem(arr,num){
 

for (i=arr.length-1 ; i>=0;i--){

     if(arr[i]==num){
        arr.splice(i,1);
     }
}

console.log(arr)

}

rem([ 1, 1, 1 ],1)