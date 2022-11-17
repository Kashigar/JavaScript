// console.log(a);// undefined 
//     var a 
//     a = 100;
//     var a =200
//     console.log(a);  //200
    
    //****************************************************************************************/
    
    // console.log(x);    // x is not defined (if u execute single line) //'x' before initialization if execute all lines
    // let x 	
    // x = 20
    // let x = 35    //cannot re declare it so get error Identifier 'x' has already been declared
    // x = 95              
    // console.log(x);    //95
    //****************************************************************************************/
    
    // const y = 3.1415;
    
    // function fun1() {
    //     console.log("local");
    // }
    // y = 3;                  
    // console.log(y);    //Assignment to constant variable. because we cannot re declare & re initialize const variable
    
    //****************************************************************************************/
    
    // {
    //     var b = "Rekha"  //stored in global
    //     let w = "welcome"    // stored in block
    // }
    
    //****************************************************************************************/
    
    // console.log(index);           //undefined      
    // for (var index = 0; index < 5; index++) {
    //     console.log(index);     //0 1 2 3 4
    // }                                                
    // console.log(index);   //5 
    
    //****************************************************************************************/
    
    //console.log(index);       // error -> index is not defined
    // for (let index = 0; index < 5; index++) {
    //     console.log(index);                     
    // }
    // console.log(index); //ReferenceError: index is not defined         
    
    //****************************************************************************************/
    
    var a = 100;
    // console.log(a);   //100
    // {
    //     var a = 200     
    //     console.log(a);  //200
    // }
    // console.log(a);   //200
    
    //****************************************************************************************/
    
    // let x = 10
    // {
    //     let x = 20
    // }
    // console.log(x);   //10 because x=20 is stored in block and x=10 is stored in local so x=10 is the output
    
    //****************************************************************************************/
    
    // var a = 20  // stored in global
    // // let a = 30  // stored in script
    // console.log(a);  // Identifier 'a' has already been declared (if u redeclare it with let)  -> 
    // //display 20 (if u will not reclare it with let as because it will get confused whether variable to be displayed if from global or script
//****************************************************************************************/
