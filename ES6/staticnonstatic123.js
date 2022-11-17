class myself{

    constructor(fname,lname, address){
        this.fname=fname
        this.lname=lname
    }
    a=10
    static b=20
     display()
     {
        // console.log(this.a);
        // console.log(myself.b);
        // console.log("hi");
        //calling static method inside non static method
        var a=new myself()
        console.log(a.mock());
     }

     show()
     {
        console.log(this.display());
        console.log("Presentation on java script es feature");
        console.log(myself.mock());
     }
      static greet()
      {
        console.log(this.b);
        console.log("good morning");

        var m=new myself()
        console.log(m.a);
      }
      static mock()
      {
        console.log(this.greet());
        console.log("Mock on monday");
        console.log(demo1.show()) //***************** */
      }
}
var demo1=new myself("suma","sk","dharwad")

// console.log(demo1.a)
// console.log(myself.b);
// console.log(demo1.display());
// console.log(myself.greet());

//console.log(myself.mock())
console.log(demo1.d);

