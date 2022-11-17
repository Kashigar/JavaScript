var employee={
    fname:"suma",
    lname:"kashigar"
}
var emplDetails={
    company:"testYantra",
    salary:"40000",
    place:"Banglore"
}
var Tyss={
    ...employee,...emplDetails
}
console.log(Tyss);

//spread parameter will spread the details of variables