// var array=["suma","kashigar","garag","aniketh"]
// //console.log(array);
// let x=array[1]
// let y=array[3]
// console.log(x,y);       // kashigar aniketh
// let s=[x,y]
// //console.log(s);       // [ 'kashigar', 'aniketh' ]
// let r=[a,,b]=array
// //console.log(a,b);           // suma garag

var empdetails=["suma","sk","dwd","24-10-1993"]
var fname=empdetails[0]
console.log(fname)

let lname=empdetails[1]
console.log(lname);

var emp=[fname,lname]
console.log(emp);

var dt=[fname,,,,lname]=empdetails
console.log(dt);