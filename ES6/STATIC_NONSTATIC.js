class employee
{
    constructor(emp_Fname,emp_lname)
    {
        this.emp_Fname=emp_Fname
        this.emp_lname=emp_lname
    }
    static emp_Id="101";
    Position="Manager"
    static details()
    {
       console.log("Emp id is "+ this.emp_Id)
        var e=new employee()
        console.log(e.Position)
    }

    Emp_Personal_info()
    {
       console.log("Position is "+ this.Position)
    }

}
var emp1=new employee("Suma","Sk")
employee.details()
emp1.Emp_Personal_info()
console.log(employee.emp_Id);
console.log(emp1.Position);