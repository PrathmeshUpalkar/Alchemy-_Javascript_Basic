


function greaterThanFive(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] <= 5) {
            arr.splice(i, 1);
        }
    }
    console.log(arr)
}

greaterThanFive([2,4,8,79,2,1])