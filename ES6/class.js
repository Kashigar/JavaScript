class person 
{
    constructor(fname,lname,skills)
    {
        this.fname=fname
        this.lname=lname
        this.skills=skills
    }
    static a=10
    b=20                //declare & initialize non static variable 

    sample()
    {
        console.log( `My name is ${demo1.fname} last name : ${demo1.lname}  & Skills ${demo1.skills}`);

    }

    static demo()
    {
        console.log(`My first name is :${demo1.fname} My last last name is :  ${person.lname} My skills :${person.skills}`);
    }
}
var demo1=new person ("suma", "SK", ["java","selenium","java script"]) // INSTANCE 
person.demo()       //invoking static variable using class name 
demo1.sample()      // invoking non-static variable using instance

console.log(person.a);  // invoking static variable with class name 
console.log(demo1.b);      // invoking non-static variables with instance(object)

//OUTSIDE THE METHOD :
// static variables and static methods are accessed by using class name 
// non-static variables and methods are accessed using instance variable (object) created