var array=[11,22,33,44,"suma",'teju']

console.log(array.some((ele) => {  // It will check the condition , if any one of the elements are > than 10 
    return ele >10                      // Then it returns true else if all elements are not matching the condition returns false and it will print 
    }))                                 // all the elements as in the array
    console.log(array);