class mobile
{
    constructor(brand,version,color,cost,configuration)
    {
    this.brand=brand
    this.version=version
    this.color=color
    this.cost=function(){return cost}
    this.configuration=configuration
    }
}
var mobile1=new mobile("vivo","v9","blue",50000,{ram:"2gb",rom:"8gb",os:"android"})
//console.log(mobile1);
console.log(mobile1.cost());
//console.log(mobile1.configuration.os);
//console.log(delete mobile1.color1);
