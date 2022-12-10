
let hand  = "KQJ";

let counter = 0;

for(let i = 0 ; i<hand.length;i++){

    if(hand[i]=='K') counter+=4;
    if(hand[i]=='J') counter+=4;
    if(hand[i]=='Q') counter+=2;     
}

console.log(counter)