var empid=[100,50,10,5]

console.log(empid.filter((element)=>{
    if(element>20){
        return element          //return 50,100 because are>20
    }
}))
//console.log(empid);  // original array