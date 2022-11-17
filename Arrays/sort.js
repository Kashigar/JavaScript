       var Array2=[100,50,10,5]

console.log(Array2);            // [ 100, 50, 10, 5 ]
console.log(Array2.sort((a,b)=>{
       return (a-b)         //return [ 5, 10, 50, 100 ]
    
}))
console.log(Array2);  // Modifies original array [ 5, 10, 50, 100 ]