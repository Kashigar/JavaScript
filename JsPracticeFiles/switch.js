var a=10;
var b=20
var operation="amul"

switch(operation){
    case "add" :
    var c=a+b
    console.log("Addition of a & b is " + c);
    break;

    case "mul" :
    var c=a*b
    console.log("Multiplication of a & b is " + c);
    break;

    case "div" :
    var c=a/b
    console.log("Division of a & b is " + c);
    break;

    default :
    console.log("Enter correct operation to be performed")
}