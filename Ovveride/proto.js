var camera=
{
    brand:"sony",
    color:"black",
    model:"2022",
    cost: function(){return 1,50000}
}
var lapi={}
console.log(lapi);      //output--> {}
lapi__proto__=camera        //creates the prototype of camera and stores it in lapi
console.log(camera);    //output--> { brand: 'sony', cost: [Function: cost] }
console.log(lapi.brand)     // output--> undefined
lapi.brand="samsung"
 console.log(lapi.brand)     // output--> samsung
console.log(lapi.color);
lapi.addres

