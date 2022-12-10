function reverse(string) {

    let str = "";
    for(i=string.length-1 ; i>=0;i--){

        str= str+string[i];
    
    }
    console.log(str) ;
 
 }

 reverse("cat")