let js=
{
    fname:"scrptingLanguagr",
    duration:"One month ",

    display: function()
    {
        console.log(this.Imp_concepts);
        console.log(this.duration);
        console.log(this.fname);
    }
}
let java=
{
  fname:"programming_language",
  duration:"3 months", 
  Imp_concepts: "OOPS",
  show: function()
  {
        console.log(js.fname);
        console.log(this.fname);
        console.log(this.duration);
        var stud="suma"
        console.log(stud);
        console.log(this.Imp_concepts);
  }
  
}

//js.display()    //output--> undefined ,One month , scrptingLanguagr
                                          
java.show()     //output--> programming_language , 3 months  , suma  , OOPS

//===================================
// "this" keyword can access local values (it depends on the scope)
//If u access values using object_ref.property -->then security will not be there for the values
// If u use this keyword security is provided for the values --> only local values of property we can get  


 
  


