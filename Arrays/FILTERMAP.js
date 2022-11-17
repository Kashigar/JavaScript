var empid=[101,108,106,102,103,104,102,105]
// console.log(empid.some((ele)=>{
//     if (ele>105)
//     return ele
// }))

// console.log(empid.filter((ele)=>{
//     if(ele>102)
//         return ele
// }));

// empid.map((element)=>{
//     console.log(element+" : " +"2");
// })

// console.log(empid.includes(105))
// console.log(empid.indexOf(102));
// console.log(empid.lastIndexOf(102));

// console.log(empid.join("HRM"+ " "));

// empid.map((ele)=>{
//     console.log("HRM"+ ":"+ele);
// })

// console.log(empid.shift());
// console.log(empid.reverse());
// console.log(empid.every((ele)=>{
//     if(ele>102)
//     return ele
// }));

// console.log(empid.sort((a,b)=>{
//     return a-b
// }))

// console.log(empid.splice(1,6));
// console.log(empid.splice(2,1,"Admin"));
// console.log(empid);

// function login(user,pass,type)
// {
//     console.log("Login activity");
//     console.log(type(user,pass));
//     console.log("Login successful...!");
// }
// function asistant(user,pass)
// {
//     return (user+ " " +pass)
// }
// function admin(user,pass)
// {
//     return (user + " "+ pass)
// }
// function officer(user,pass)
// {
//     return (user + " " +pass)
// }
// login("hrhead@gmail","hrhead@123",admin)

// var assistant={
//     fname:"Suma",
//     lname:"sk",
//     email:"suma@123",
//     contact:"1234677",
//     display:function(){console.log(this.fname+this.lname);}
// }
// var officer={
//     fname:"varsha",
//     lname:"VS",
//     email:"vsdwd@gmail.com",
//     contact:"45678",
//     display:function(){console.log(this.fname+this.lname);}
// }
// function Show(value1,value2)
// {
//    console.log(value1+this.fname,+" "+ value2+this.lname)
// }
// // assistant.display.call(officer)
// Show.apply(assistant,["Banglore","Encoder"])
// // disp()

// var hrhead={}
// hrhead__proto__=assistant

// hrhead.fname="Preeti"
// console.log(hrhead);

// var hrhead={...assistant,}
// console.log(hrhead);

// var officer={
//         fname:"varsha",
//         lname:"VS",
//         email:"vsdwd@gmail.com",
//         contact:"45678",
//         display:function(){console.log(this.fname+this.lname);}
//     }
// //    console.log(officer.fname)
// // let {fname}=officer
// // console.log(fname);

// let{lname:names}=officer
// console.log(names);

// var first=empid[1]
// var last=empid[7]
// console.log(first,last);
// let [first,,,,,last]=empid
// // let[first,last]=empid
// console.log(first,last);

// //rest
// var assist={fname,lname,...other}={
// fname:"sk",lname:"sk",dob:"oct 24",email:"sumak@gmail.com",contact:"765432"
// }
// console.log(other);

// var emp="suma"
// console.log(emp.split());
// console.log(...emp);

// async function login(){
//     var path=("xpath")
//     p=new Promise((resolve,reject)=>{
//         if(path==("xpath"))
//         {
//             resolve("Admin login ")
//         }
//         else{
//             reject("Not a admin login")
//         }
//     })
//     await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
// }
// login()

// class login {
//     constructor(username,password,type="admin")
//     {
//         console.log(username+ " "+ " " +password+ " "+ type);
//     }
// }
// var log=new login("hrassistant@gmail.com","hrassistant@123")

console.log(empid.push(77));