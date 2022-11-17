// function fun()
// {
//     for(const i=0; i<5; i++)
//     {
//         console.log(i);
//     }
//     console.log(i);
// }
// fun();
// console.log(empid);
// var empid=200;
// var empid=500;
// console.log(empid);

// console.log(empid);
// let empid=200;
// empid=500;
// console.log(empid);

// console.log(empid);
// const empid=200;
// empid=500;
// console.log(empid);

////////////////////////////////
// var arr=[10,20,30,40,42,45,50];
// var out=arr.find(ele=>ele>40)
// console.log(out);

// var emp= [
//     {fname:"suma" ,lname:"sk", exp:5},
//     {fname:"preeti" ,lname:"Pm", exp:3},
//     {fname:"laxmi" ,lname:"rj", exp:4},
// ];

// var arr=[20,40,60,80,90]
// // console.log(arr.find(ele=>ele>40));

// // var output=emp.find(({fname})=>fname==="suma")
// // console.log(output);

// // var [x,...rest]=arr
// // console.log(x)
// console.log([]);
////////////////////////



// var object1={
//     fname:"suma",
//     lname:"sk"
// }

// //1. 
// obj2={};
// obj2__proto__=object1;
// console.log(obj2__proto__);
// obj2.fname="RK";
// console.log(obj2.fname);
// // var obj3={};
// var obj3=Object.create(object1);
// console.log(obj3.object1);
// obje3.fname="sony";
// console.log(obj3.fname);

// var one={
//     a:20
// }
// var two={
//     b:40
// }

// var three=Object.setPrototypeOf(two,one);
// console.log(three);

// var empid=[22,33,44,55,66]
// var mapresult=empid.map(ele=>ele+"->num"); // map works with modification
// // console.log(mapresult);

// var mapresult=empid.map(ele=>ele>40); // map also works with condition
// // console.log(mapresult);

// var filterresult=empid.filter(ele=>ele>30); //filter works with condition
// // console.log(filterresult);

// var mapresult=empid.filter(ele=>ele+"->num"); // filter will not works with modification
// // console.log(mapresult);

// var reduceresult=empid.reduce((prev,next)=>prev+next);
// // console.log(reduceresult);

// var employee=[
//     {fname:"suma", lname:"sk", exp:5},
//     {fname:"varsha", lname:"vs", exp:4},
//     {fname:"shilpa", lname:"sd", exp:5},
//     {fname:"pooja", lname:"pr", exp:2},
// ];

// var output=employee.map((x)=>x.fname+"->"+x.exp)
// // console.log(output);

// var result=employee.reduce(function(ac,cr)
// {
//     if(ac[cr.exp])
//     {
//         ac[cr.exp]= ++ac[cr.exp];
//     }
//     else
//     {
//         ac[cr.exp]=1;
//     }
//     return ac;  
// },{})
// // console.log(result);

// var get=employee.filter((x)=>x.exp>=5).map(x=>x.fname)
// console.log(get);
/////////////////////////
// var message=function()
// {
//     console.log("After 3 seconds it will execute");
// }
// setTimeout(message,3000);

// setTimeout(function()
// {
//     console.log("After 3 sec ...!");
// },3000)

// setTimeout(() => {
//     console.log("After 3 seconds....!!!!");
// }, 3000);
// function login(a,b,)

// var emp={
//     fname:"suma", lname:"sk",age:25
// };

// var emp1= new Object 
// {
//     emp1.fname="sumak",
//     emp1.lname="sk",
//     emp1.age=54
// }
// console.log(emp1.fname);
// emp1.adress="Dharwad";
// console.log(emp1);
// delete emp1.age;
// console.log(emp1);

//
//     function emp(fname,lname,display)
//     {
//         this.fname=fname;
//         this.lname=lname;
//         this.display=function(){return display;}
//     }
// var emp1=new employee("suma","sk","blue")
// console.log(emp1);

// function empl(fname,lname)
// {
//     this.fname=fname;
//     this.lname=lname;
// }
// var empl2=new empl("suma","raghu")
// console.log(empl2);

/////////
// var str=" hello how are you "
// console.log(str.trim());
// console.log(str.length);
// console.log(str.concat("banglore"));
// console.log(str.indexOf("h"));
// console.log(str.lastIndexOf("h"));
// console.log(str.repeat(3));
// console.log(str.includes("s"));
// console.log(str.replace("h","H"));
//////////
// console.log(Math.abs(-4.22));
// console.log(Math.abs(+4.22));
// console.log(Math.round(4.22));
// console.log(Math.round(-4.92));
// console.log(Math.ceil(8.22));
// console.log(Math.floor(7.60));
// console.log(Math.random()*100);

//////////
// d= new Date();
// console.log(d.toDateString());
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getDay());
////////////
//  var array=[20,40,60,80]

//  console.log(array.concat(100));
//  console.log(array.pop());
//  console.log(array.push(300));
//  console.log(array.shift());
//  console.log(array.unshift(600));
//  console.log(array);
// console.log(array.slice(0,3));
// // console.log(array.splice(1,1,"hi"));
// console.log(array);
// console.log(array.reduce((a,b)=>a+b));
// console.log(array.reduceRight((a,b)=>a-b));
// console.log(array.filter((ele)=>ele>40));
// console.log(array.map((ele)=>ele+"hi"));
// console.log(array.forEach(function(ele)
// {
//     console.log(ele+2)
// // }));
// console.log(array.reverse());
// console.log(array.indexOf(80));
// console.log(array.lastIndexOf(40));

///////////cloure
// function top()
// {
//     const c=50
//     function outer(b)
// {
   
//     function inner()
//     {
//         console.log(a,b,c);
//     }
//     const a=30;
//     return inner;
//     // inner()
// }
// return outer;
// }
// outer()();
// var result=top()("suma");
// result();
///////

// async function login()
// {
//     var count=true;
//    var p=new Promise((resolve,reject)=>
//     {
//         if(count)
//         {
//             resolve("Login successful")
//         }
//         else
//         {
//             reject("Login failed")
//         }
//     })
//     p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
// }
// // login();
//  class animal{
//     constructor(legs)
//     {
//         this.legs;
//     }
//     walks()
//     {
//         console.log("Animal walks with " +this.legs+ "legs");
//     }
//  }
//  class birds extends animal{
//     constructor(legs)
//     {
//         super(legs)
//     }
//     fly()
//     {
//         console.log("flying  with"+ this.legs+ "wings");
//     }
//  }

//  var b1= new birds();
//  b1.walks();
//  b1.fly()

////////////////
// let s= Symbol()
// console.log(Symbol()===Symbol());
// console.log(s);

// let num= new Array(2)
// console.log(num.legth);
// console.log(num[0]);

// var empids=[10,20,30,40,50,60]
// var[a,...c]=empids;

// var one=empids.find(ele=>ele==50)
// console.log(one);

// var arr=[
//     {fname:"suma",lname:"sk",exp:5},
//     {fname:"varsha",lname:"vs",exp:5},
//     {fname:"roopa",rk:"vs",exp:3},
//     {fname:"prasad",lname:"pk",exp:2},
// ];
// var two=arr.find(({exp})=>exp===5)
// console.log(two);

// class animals
// {
//     constructor(legs)
//     {
//         this.legs=legs;
//     }
//     walks()
//     {
//         console.log("Animals walk with"+ this.legs+"legs");
//     }
// }
// class humans extends animals
// {
//     constructor(legs)
//     {
//         super(legs)
//     }
//     run()
//     {
//         console.log("human run with"+ this.legs+"legs");
//     }
// // }
//  var human1=new humans(2);

//  human1.walks();
//  human1.run();

//  var object1={
//     fname:"suma",lanme:"sk",age:28
//  };

//  var obj2={};
//  obj2__proto__=object1;
//  console.log(obj2__proto__);
//  obj2.fname="shobha"
//  console.log(obj2.fname);
// var obj3={}
//  Object.assign(obj3,object1);
//  console.log(obj3);

//  var obj4=Object.create(object1);
//  console.log(obj4);
//  console.log(obj4.fname="anjali");
// //////
// async function login()
// {
//     var type="Admin";
//     var p=new Promise((resolve,reject)=>
//     {
//         if(type)
//         {
//             resolve("Admin login");
//         }
//         else
//         {
//             reject("Not a admin")
//         }
//     })
//     p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg));
// }
// // login()

// var empidnum=[101,102,103,104,105]

// // var output1=empidnum.map((ele)=>ele+2)
// // console.log(output1);
// // var output1=empidnum.filter((ele)=>ele>103)
// // console.log(output1);
// // var output1=empidnum.map((ele)=>ele>103)
// // console.log(output1);
// var output5=empidnum.reduce((ele1,ele2)=>ele1+ele2)
// // console.log(output5);

// var syes=empidnum.forEach((ele)=>console.log(ele>103));
// console.log(syes);

// var arr=[
//     {fname:"suma",lname:"sk",exp:5},
//     {fname:"varsha",lname:"vs",exp:5},
//     {fname:"roopa",rk:"vs",exp:3},
//     {fname:"prasad",lname:"pk",exp:2},
// ];

// var outp=arr.map((x)=>x.fname)
// // console.log(outp);

// var results=arr.reduce(function(ac,cr)
// {
//     if(ac[cr.exp])
//     {
//         ac[cr.exp]= ++ac[cr.exp];
//     }
//     else
//     {
//         ac[cr.exp]=1;
//     }
//     return ac;
// },{})
// // console.log(results);

// var yes=arr.filter((e)=>e.exp==5).map(x=>x.fname)
// // console.log(yes);

// function top()
// {
//     let c=30
// function outer(b)
// { 
//     function inner()
//     {
//         console.log(a,b,c);
//     }
//     let a=10;
//     return inner;
//     // inner()
// }
// return outer;
// }
// var close=top()("suma");
// close();

// import { name,empid } from "./ready";
// console.log(name, empid);

// const a=10;
// {
//     const a=20;
//     console.log(a);
// }
// console.log(a);

// console.log(false==='0');  //false
// console.log(false=='0');       //true














































