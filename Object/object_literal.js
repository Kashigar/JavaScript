//SYNTAX --> VAR OBJ_REF = {PROP:VALUE1, PROP2: VALUE2}

var mobile =
{
    brand:"vivo",
    version:"v9",
    color:"DarkBlue",
    configuration: { ram:"6 gb", os : "android"},  
    cost: function() {return 20000 }
}
mobile.manufactureYear=2018             // to add property and value 
// delete mobile.configuration

// to delete from the object
// console.log(mobile.configuration);      // to print particular property value 
// mobile.defaultApplications=["messaging","facebook","calendar","phonepay"] //  to add array to the object
// console.log(mobile.defaultApplications[1])     // to print value of array of required index
console.log(mobile)                     // to print whole object
