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
        console.log(this.a); // undefined --> because varibable is static 
        console.log(this.b); // non static variable inside non static method -->20
        console.log(person.a);  // static variable inside non static-method-->10
        console.log( `Hello`);
       
    }

    static display()
    {
        console.log(this.a);    // static variable inside static method using this
        console.log(demo1.b);   // non static varaible inside  static method using reference variable.variable
        console.log(`"hello`);
         //creation of object
        let r=new person()         //create object to acces non static variable in static method 
        console.log(r.b);           // object . non static variable 
    }
}

var demo1=new person ("suma", "SK", ["java","selenium","java script"])

// console.log(demo1.sample())
// console.log(person.display());

//INSIDE THE METHOD :
// to access non static variable inside static method we create an another object inside the
// method and access the non static variable using newly created object.

