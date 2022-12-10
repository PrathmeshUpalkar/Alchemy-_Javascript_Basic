function isAllX(string) {
 
    let lower = string.toLowerCase();

    
    let ret = true;
   for(let i =0 ; i<lower.length;i++){
   
       if (lower[i] !== "x" ) {
        ret = false;
       }
   } 

   console.log(ret)
   
   }

   isAllX("xys")