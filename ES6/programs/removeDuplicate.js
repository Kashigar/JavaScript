var array = [1,1,2,2,2,3,3,4,4,5,1,5]
array.sort()
console.log(array);

// var current = array[0]
// var found = false

// function removDuplicate() 
// {
    for (let key in array) {
        console.log(key);
        if (array[key]==array[key+1]) {
            console.log(key);
              array.splice(key,1)
           }
    }
       
    
// }
// removDuplicate();

console.log(array);

