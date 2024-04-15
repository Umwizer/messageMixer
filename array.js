const array=[34,56,67];
let sum=0;

 
    for(let i=0; i<array.length;i++){
       
        sum=sum+array[i];
       
    }
    // array.forEach((value) =>{

    // })
    console.log(sum)
   const max=array[0];
   for(let j =0 ;j<array.length;j++){

    if(array[j]>max){
        maximumNumber=array[j]
    }
    
}
console.log(maximumNumber)
const lowestNumber=array[0];
   for(let j =0 ;j<array.length;j++){

    if(array[j]<lowestNumber){
       lowestNumber=array[j]
    }
   
}
console.log(lowestNumber);
