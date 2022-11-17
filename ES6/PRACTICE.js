// //***********Inbuild methods */
// var Employee1={
//     fname:"suma",
//     lname:"sk",
//     display:function()
//     {
//         console.log(this.fname + this.lname)
//     }
// }
// var Employee2={
//     fname:"Varsha",
//     lname:"VS",
//     dispaly:function()
//     {
//        console.log(this.fname + this.lname)
//     }
// }
// function empbranch(branch,corporate)
// {
//     console.log(branch+this.fname,corporate+this.lname)
// }
// Employee1.display.call(Employee2)
// Employee2.dispaly.call(Employee1)
// empbranch.call(Employee1,"Mysore","IT")
// var e1=Employee1.display.bind(Employee2)
// var e2=Employee2.dispaly.bind(Employee1)
// var e3=empbranch.bind(Employee1,"Mysore","IT")
// e1()
// e2()
// e3()
// Employee1.display.apply(Employee2)
// Employee2.dispaly.apply(Employee1)
// empbranch.apply(Employee1,["Mysore","IT"])
//**************************************************** */PROMISES
// async function login()
// {
//     var path=("xpath")
//     p= new Promise((resolve,reject)=>{
//         if(path=="expath"){
//             resolve("Admin login")
//         }
//         else{
//             reject("Not admin")
//         }
//     })
//     await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
// }
// login()
// //******************************** */DEFAULT PARAMETER
// var empl={fname,laname,...other}={
//     fname:"Suma",
//     lname:"sk",
//     email:"suma.k@gmail.com",
//     phn:"123456789",
//     branch:"Mysore",
//     adress:{tin:"123",sss:"1234",file:"132"},
//     display:function(){
//        console.log(`Name of emp is ${this.fname} and emailid is ${this.email}`);
//     }
// }
// console.log(other);
// // console.log(empl);
// empl.display();
// var Adminempid=[101,102,103,104,105,106]
// var officerempid=[...Adminempid,122]
// console.log(officerempid);
// var assistant={...empl}
// console.log(assistant);
// var Empname="Suma"
// console.log(...Empname);
// console.log(Empname.split());
//************************* */OBJECT DESTRUCTURING
// var empname=empl.fname
// console.log(empname);
// var{lname}=empl
// console.log(lname);
// var {fname:disp}=empl
// console.log(disp);
//************ ARRAY DESTRUCTURING
// var x=Adminempid[3]
// var y=Adminempid[5]
// console.log(x,y);
// let [x,y]=Adminempid
// console.log(x,y);
// let [x,,,,,y]=Adminempid
// console.log(x,y);
//*****************CLOSURE */
// var compid="tyss111";   
//     function empdetails()
//     {
//         var empid="2022-101";
//         function display()
//         {
//             empbranch="Mysore"
//             console.log(`Employee branch is ${empbranch} empid is ${empid} company id is ${compid}`);
//         }
//         display()
//     }
//     empdetails()
// console.log(compid)
// empdetails()
//**************** */INHERITance

// var employee3={}
// employee3__proto__=Employee2
// console.log(employee3);
// employee3.fname="preeti"
// console.log(employee3.fname);
//********************Default parameter*/
// function login(user,pass,type="admin")
// {
//     console.log(user+" "+pass+" "+type);
// }
// login("admin@gmail.com","admin@123")

//******************** */ call back function
// function login(user,pass,type)
// {
//     console.log("Execution started");
//     return(type(user,pass));
// }
// function assistant(user,pass)
// {
//     console.log("Its a assistant login" +user+ " " +pass);
// }
// function officer(user,pass)
// {
//     console.log("Its a officer login" +user+ " " +pass);
// }
// function admin(user,pass)
// {
//     console.log("Its a admin login" +user+ " " +pass);
// }
// login("admin@gmail.com","admin@123", admin)
//******************CLASS  */
class employee{
    constructor(fname,lname)
    {
        this.fname=fname
        this.lname=lname
    }
    static compid="tyss333"
    empdesignation="Encoder"
    static empdetails()
    {
        console.log(this.compid);
        var e=new employee()
         console.log(e.empdesignation)
         this.greet()

    }
    emppersonalinfo()
    {
        console.log(this.empdesignation);
        console.log(employee.compid);
        emp1.wishes()
    }
    static greet()
    {
        console.log("hello");
    }
    wishes()
    {
        console.log("hi...!");
    }
}
var emp1=new employee("suma","sk")
emp1.emppersonalinfo()
employee.empdetails()
