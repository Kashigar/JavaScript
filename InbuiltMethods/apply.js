var prgm1=
{
    fname:"java",
    lname:"script",
    greeting:function(){
        console.log("Hello hi" + " "+ this.fname + " "+ this.lname)
    }
}
var prgm2={
    fname:"selenium",
    lname:"webIO",
    display: function() 
    {
       console.log( "hello" + " " +this.fname +" "+ " hi" +this.lname)
    }
}

function wishes(value1,value2)
{
    console.log(value1+this.fname+ "  " +this.lname+value2);
}
prgm2.display.apply(prgm1)
prgm1.greeting.apply(prgm2)
wishes.apply(prgm2,["GoodMorning","have a nice day","Rekha_Maam","Its Tuesdy"])
