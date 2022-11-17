var Array2=[100,50,10,5]

console.log(Array2);            // [ 100, 50, 10, 5 ]
function myfunction(total,Array2)
{
       return total-Array2        
}   
console.log(Array2.reduceRight(myfunction));  // -155
console.log(Array2);                        //[ 100, 50, 10, 5 ]