
// const elements = ["e", "k", "e", "z", "i", "z"];
// countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}

const elements = ["e", "k", "e", "z", "i", "z"];


let obj=[];

let ind = elements[0]

for(i=0;i<elements.length;i++){
    obj[elements[i]]=0;
       
    for(j=0;j<elements.length;j++){
    if(elements[i]==elements[j]){
        obj[elements[i]] += 1 ; 

    }
}

}

console.log(obj)




