function scream(n) {
    let str = "";
   
   for(let i=0;i<n;i++){
      if(i%2==0){
        str+="a";
      }
      if(i%2!=0){
        str+="A";
      }
   }
   console.log(str);
}

scream(5);