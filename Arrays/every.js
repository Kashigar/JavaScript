// var array=[2,4,6,8,20,30,40,50]

// console.log(array.every((ele) => {  // It will check the condition , if all the elements are > than 2 
// return ele >=2                      // Then only it returns true else returns false and it will print 
// }))                                 // all the elements as in the array
//console.log(array);
// output:false
// [
//    2,  4,  6,  8,
//   20, 30, 40, 50 
// ]

var empid=[101,102,103,104,105,106,107,108,109,110]
console.log(empid.every((ele)=>{
    ele>105
}))