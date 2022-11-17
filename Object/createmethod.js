var myself= {
    f_name:"suma",
    l_name:"Kashigar",
    experience:"4",
    skill_tes:[{1:"S",2:"p"},"manual","sql","java-script","selenium"],
    display: function()
    {
        return "My name is: " + " " + this.f_name +" " + this.l_name
    }
}
var biodata= Object.create(myself)
    biodata.f_name="Preeti" //override
    
    biodata.l_name="Garag"  //override
//console.log(myself);      // Display whole object content
console.log(myself.skill_tes[1])

//console.log(biodata)        // Didplays overriden values 
//console.log(myself.display());  // Output--> My name is:  suma Kashigar 
//console.log(biodata.display());    //output--> My name is:  Preeti Garag

// Using this feature we can get the older values also as well as the new values set using new object