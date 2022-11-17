(sum=function(a,b)
{
    console.log(a+b)        //5
    console.log(arguments[4]);  //6
    console.log(arguments); // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 }
})
(2,3,4,5,6,7,8)

// (mul=function(a,b)
// {
//     console.log(a*b)
//     console.log(arguments);
// })
// mul(2,3,4,5,6,7,8)

