// function add(a,b)
// {
//     var rest=[8,9,10]
//     console.log(rest);      // [ 8, 9, 10 ]
//     console.log(arguments); // [Arguments] { '0': 3, '1': 5, '2': 7, '3': 9, '4': 2, '5': 6 }
//     //console.log(arguments.concat(rest)); // arguments.concat is not a function // disadvantage
//     console.log(arguments.pop())    // pop is not a function//disadvantages
// }
// add(3,5,7,9,2,6)

//**********************************/

function emplyee_details (name,cource,...skills)
{
    console.log(name);          //suma
    console.log(skills);        //[ 'selenium', 'java', 'javascript', 'api' ]
    var rest=[222,333,444]
    console.log(skills.concat(rest));      //[ 'selenium', 'java', 'javascript', 'api', 222, 333, 444 ]
    console.log(skills.pop());          //api
}
emplyee_details("suma","JavaScript","selenium","java","javascript","api")

// with rest parameter we can use all the array methods 
//

