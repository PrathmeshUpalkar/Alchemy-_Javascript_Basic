
let str = " ";
str.toLowerCase
let arr = [];
for(i=0;i<str.length;i++){
    // if(str[i]=="c" || str[i]=="C"){

    //     arr.push(str[i]);
    // }

    if (str[i] == "a" || str[i] == "A" || str[i] == "e" || str[i] == "E" || str[i] == "i" || str[i] == "I " || str[i] == "o"|| str[i]=="O" || str[i]=="u" ||str[i]=="U"){
        arr.push(str[i])
    }
}
console.log(arr)
console.log(arr.length)