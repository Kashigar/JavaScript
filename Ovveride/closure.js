var didtrict_name="Dharawd"             
console.log(didtrict_name);

function your_village()
{
    number_of_villages="ten"
    function villageName()      
    {
        console.log(number_of_villages);
    }
    villageName()
    console.log(didtrict_name);
}
console.log(didtrict_name);
your_village()
//============================
//line num 7-10 is called lexical (local scope)
//line num 4-13 is called lexical environment (outfunction scope)
//line 1-15 is called global (global scope)