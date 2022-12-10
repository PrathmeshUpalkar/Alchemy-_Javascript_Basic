
function hasOne(array) {
 
    for(let i = 0 ;i<array.length;i++){

        if(array[i]==1){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
}

hasOne([2,1,4,5,8,4])