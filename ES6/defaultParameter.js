// function addition(a,b)
// {
//     return a*b
// }
// let result=addition(5)
// console.log(result);        //NaN
// a=5 b=undefined sp NaN

//********************************* */
// function addition(a,b=10)
// {
//     return a*b
// }
// let result=addition(5)
// console.log(result);        //50
// a=5 b=10(takes value of b used in function defination)
//***************************** */
// function addition(a=10,b)
// {
//     return a*b
// }
// let result=addition(5)
// console.log(result)     //NaN 

//*********************** */
// function addition(a,b=10)
// {
//     return a*b
// }
// let result=addition(5,5)
// console.log(result) // 25-->(5*5)
//******************* */
// class test{     //IMPORTANT 
// constructor(a,b=5){   
//     console.log(a+b);
// }
// }
// var a=new test(4)       //4 IMPORTANT

class login
{     //IMPORTANT 
    constructor(username,password,type="admin")
    {   
        console.log(username + "  " +"  " + password +"  " + type);
    }
}
var a=new login("hrofficer@gmail.com","hrofficer2123")       //4 IMPORTANT
