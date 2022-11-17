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
        console.log(this.a); // undefined 
        console.log(this.b); // 20
        console.log(person.a);  // 10
        console.log( `Hello`);
       
    }
    greeting()
    {
    this.sample();
    person.display();
    }

    static display()
    {
        console.log(this.a);    // 10
        console.log(demo1.b);   // 20//*** */
        console.log(`"Hi...`);  //hello
         //creation of object
        let r=new person()         //create object to acces non static variable in static method 
        console.log(r.b);           // object . non static variable // 20
    }

    static wishes()
    {
       this.display()
       demo1.sample();
    }
}

var demo1=new person ("suma", "SK", ["java","selenium","java script"])  // instance 

demo1.greeting()
//person.wishes()
