// function start()
// {
//     for(const i=0;i<5;i++)
//     {
//         console.log(i);
        
//     }
//     console.log(i);
// }
// start();

// const emp_name="suma";
// console.log(emp_name);

// emp_name="suma.SK.DWD";
// console.log(emp_name);

// const emp_name="SRK";
// console.log(emp_name);
//***********************************

// var employee={
   
//     id:1,
//     age:29,
//     adress:{
//         city:"bangalore",
//         country:"India"
//     },
// }
// console.log(employee);
// let id=employee.id;
// console.log(id);

// const {age,id}=employee;
// console.log(age +"     "+id);

// const {age:empage,id:empid}=employee;
// console.log(empage +"     "+empid);

// const {ename:sname="suma"}=employee;
// console.log(sname);

// const {adress: {city}}=employee;
// console.log(city);
//****************************** */


// async function logintype()
// {
//     var type="admin"
//     p=new Promise((resolve,reject)=>{
       
//         if(type)
//         {
//             resolve("Admin login")
//         }
//         else{
//             reject("not a admin")
//         }
//     })
// await p.then((resolveblock)=>console.log(resolveblock)).catch((rejectblock)=>console.log(rejectblock))
// }
// logintype()
//*********************************** */
// var empid=[101,202,303,404,505]

// var filterresult=empid.filter(ele=>ele>300);
// console.log(filterresult);

// var mapresult=empid.map(ele=>ele>300);
// console.log(mapresult);
// var foreachresult=empid.forEach((ele)=>"empid is :"+ ele)
// console.log(foreachresult);

// var array=[2,4,6,8]
// result=array.reduce((prev,next)=>prev+next)
// console.log(result);

// var array=[71,2,3,4,40,3,2];
// array=array.filter((value,index)=>array.indexOf(value)===index)
// console.log(array);

// array=array.filter((ele,index)=>array.indexOf(ele)===index)
// console.log(array);

// var max=array[0];
// for(let i=0;i<array.length;i++)
// {
//     if(array[i]>max)
//     {
//         max=array[i];
//     }
// }
// console.log(max);

//*********************************** */
// var salary=[200000,3000,400000,240000];
// min=salary[0];
// for (let index = 0; index < salary.length; index++)
//  {
//     if(salary[index]<min)
//     {
//         min=salary[index];
//     }
// }
// console.log(min);

//************************* */bubble sort ascending and descending
// var arr=[30,20,18,49,62,38];
// for(var i=0;i<arr.length;i++)
//     {
//         for(var j=i+1;j<arr.length;j++)
//         {
//         if(arr[i]<arr[j])
//         {
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);

//********************* */ string reverse (palindrom)

// function reversestring(str)
// {
//     reversed="";
//     for(var i=0;i<str.length;i++)
//     {
//         reversed=str[i]+reversed;
//     }
//     console.log(reversed);
// }
// reversestring("suma");

//************************* */
// function reversestring(str)
// {
//     reversed="";
//     for(var i=0;i<str.length;i++)
//     {
//         reversed=str[i]=reversed;
//     }
//     if(str===reversed)
//         {
//             return true;
//         }
//         else{

//         }
//     console.log(reversed);
// }
// reversestring("suma");
// console.log(reversestring.prototype);
// console.log(employee.prototype);
// var emp={};
// var emp__proto__=employee;
// console.log(emp);
// console.log(Object.getPrototypeOf(employee));
// console.log(Object.getPrototypeOf(emp));
// var emp1=Object.getPrototypeOf(employee);
// console.log(emp1);

// emp1.name="suma";

// console.log(emp1);
// console.log(Object.getPrototypeOf(emp1));
// console.log(Object.getPrototypeOf(employee));

// const arr=[1,2,3];
// console.log(Object.getPrototypeOf(arr));

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// }

// rabbit__proto__=animal;
// alert(rabbit.eats);
// alert(rabbit.jumps);

// function employ()
// {
//     this.name="sk";
//     this.age=28;
// }

// employ.prototype.greet=function()
// {alert("hi");}
// var em=new employ;

// var proto=Object.getPrototypeOf(em)
// console.log(proto);

////////////////////////////////////////////////
// var emparr=[10,20,30,40,50,60]

// const mapoutput=emparr.map(ele=>ele+"hi");
// console.log(mapoutput);


// result=emparr.filter(function triple(ele)
// {
//     return ele*3;
// })
// console.log(result);

// var filteroutput=emparr.map(ele=>ele>22)
// console.log(filteroutput)

// var employee=[
//     {firstname:"suma",lastname:"sk", age:28},
//     {firstname:"anu",lastname:"rk", age:24},
//     {firstname:"preti",lastname:"dwd", age:40},
//     {firstname:"bharati",lastname:"hubli", age:32},
//     {firstname:"pavani",lastname:"bng", age:28},
// ];


// var output=employee.map(x=>x.firstname+ " "+x.lastname)
// console.log(output);

// var sony=employee.reduce(function(a,c)
// {
//     if(a[c.age])
//     {
//        a[c.age]= ++a[c.age]; 
//     }
//     else{
//         a[c.age]=1   
//      }
//      return a;
// },{});

// console.log(sony);

// output=employee.filter(x=>x.age>29).map(y=>y.firstname+ " "+y.lastname)
// console.log(output);

//////////////////////////
// class employers
// {
//     constructor(fname,lname)
//     {
//         this.fname=fname;
//         this.lname=lname;
//     }
//     static empid="tyss1818";
//     empn=121;

//     static greet()
//     {
//         console.log("hello");
//         console.log(this.empid);
//         let e=new employers();
//         console.log(e.empn);
        
//     }
//      display()
//     {
//        console.log(this.empn);
//         console.log("good evening");
//     }
// }
// var emp1=new employers("suma","ks");
// // console.log(emp1.display());

// console.log(employers.greet());


// var employee=[
//     {firstname:"suma", lname:"sk",exp:5},
//     {firstname:"tanu", lname:"pb",exp:1},
//     {firstname:"preeti", lname:"bm",exp:5},
//     {firstname:"laxmi", lname:"rj",exp:4},
// ];

// var output=employee.map(obj=>obj.firstname+ " "+obj.lname);
// // console.log(output);

// var one=employee.map(x=> "name -> "+ x.firstname)
// // console.log(one);

// var two=employee.filter(x=>x.exp>2).map(x=>x.lname)
// // // console.log(two);

// // var three=employee.reduce(function(a,c)
// // {
// //     if(a[c.exp])
// //     {
// //         a[c.exp]= ++a[c.exp];
// //     }
// //     else{
// //         a[c.exp]= 1;
// //     }
// //     return a;
// // },{});
// // console.log(three);

// var emp={
//     fname:"sume",
//     lname:"sk",
//     skills:["javascript","webdriverio","cypress"],
//     display:function(){ console.log("hello" + this.fname);

//     }
// }

// var admin={
// fname:"Aniketh",
// lname:"am",
// greet:function()
// // {
//     console.log("hi"+ this.fname);
// }
// }

// function welcome(val1,val2)
// {
//     console.log(val1+this.fname, val2+this.lname);
// }


// var one=emp.display.call(admin);
// console.log(one)

// var two=admin.greet.call(emp);
// console.log(two);

// var b=emp.display.bind(admin);
// b()
// var c=admin.greet.bind(emp);
// c();

// var app=emp.display.apply(admin)
// console.log(app);

// var four=welcome.apply(emp,["good","morning"])
// console.log(four);
// //////////////////////////
//  var count=true;
//  var pr=new Promise(function(resolve,reject)
//  {
//     if(count)
//     {
//         resolve("Count value");
//     }
//     else
//     {
//         reject("Not a count");
//     }
//  })
// pr.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg));
// console.log(pr);

// async function logintype()
// {
//     var type="admin";
//     var pr= new Promise(function(resolve,reject)
//     {
//         if(type)
//         {
//             resolve("Admin login")
//         }
//         else
//         {
//             reject("not a admin ");
//         }
//     })
//     pr.then((msg)=>console.log(msg));
//     pr.catch((msg)=>console.log(msg));
// }
// logintype();

// var arr=[30,33,5,5,21,87,34,56];
// output=arr.forEach(ele=>console.log(ele+ " -> num"))
// console.log(output);

// var one=arr.filter(ele=>ele>29)
// console.log(one);

// two=arr.reduce((prev,next)=>prev+next)
// console.log(two);
// function top()
// {
//     var c=20;
//     function outer(b)
//     {
//         function inner()
//         {
//             console.log(a,b,c);
//         }
//         const a=10;
//     return inner;
//         // inner()
//     }
//     return outer;
// }

// var close=top()("suma");
// close();
// function top()
// {
//     let c=20;
// function outer(b)
// {
//     var a=10;
//     function inner()
//     {
//         console.log(a,b,c);
//     }
//     return inner;
// }
// return outer;
// }
// top()("suma")();

// function count(){
//     var counter=0;
// return function increment()
// {
//     counter++;
//     console.log(counter);
// }
// return increment;
// }
// var a=10;
// var b=20;
// var c="30";
// console.log(a+b+c);

// console.log(false=='0');
// console.log(false==='0');

(function fun ()
{
    a=b=c=d=5;
})
console.log(d);

