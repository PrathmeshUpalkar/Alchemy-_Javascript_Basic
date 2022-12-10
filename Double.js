
// The goal is to double a value until just before it reaches a top.

// Let's say our value is 2 and our top is 100. We would double it like so:

// 2, 4, 8, 16, 32, 64, 128


function topDouble(value, top) {
    
    let double=value;
 
     for(i=value;i<top;i*=2){

      if(i*2<top){
        double = double*2;
      }
     }
    
    console.log(double)

}
topDouble(2,100)