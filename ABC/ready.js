// function run()
// {
//     for(const i=0;i<=0)
//     {
//         console.log(i);
//     }
//     // console.log(i);
// }
// run()

// console.log(3<5>7);  //false
// console.log(6>9<12);    //true 
// console.log(true>0);        //ture
// console.log(9>5<6>12); //false
// var a=10;
// var b="20";
// var c=30
// console.log(a+b+c);

//true*anything=true
// //false*anything=false
// var obj={
//     fname:"suma", lname:"sk"
// }
// var {fname:fn}=obj;
// console.log(fname);
// var obj2=Object.entries(obj)
// console.log(obj2);


// array=[11,22,33,44,55,66,77,88]
// var[x,y,...other]=array;
// console.log(x);
// console.log(other);

// var e,b;
// [e=500,b]=[300,400]
// console.log(e);

// var x=10,y=20
// var [x,y,]=[y,x]
// // console.log(array.find(ele=>ele>22));
// console.log(y);

// function run()
// {
//    for(const i=0;i<=5;i++)
//    {
//     console.log(i);
//    }
// //    console.log(i);
// }
// run();
// var obj={a:10};
// var obj2=Object.assign({},obj);
// console.log(obj2);

// var p=new Promise((resolve,reject))
// console.log(typeof(Promise));

// var count=true;
// var p=new Promise((resolve,reject)=>
// {
//     if(count)
//     {
//         resolve("count value");
//     }
//     else
//     {
//         reject( " Not a count value");
//     }
    
// });
// p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))

// var empid=[10,21,31,41,5,1,6,1,6,1];
// var [sk,vs,rk,vb,tn]=empid;
// console.log(vb);
// var [sk, ...rest]=empid;
// console.log(sk);
// emp=[sk,rk];
// var[sk,rk]=[300,400] //can assign values using destructuring 
// var[sk,rk]=[rk,sk]  // swap without using third variable
// console.log(sk);

// var emp={
//     fname:"suma",lname:"sk", age:28,
//     display:function(){return "hi"}
// }
// let{fname}=emp;
// console.log(fname);
// let{fname:fn}=emp;
// console.log(fn);

// class employee{
//     constructor(fname,lname)
//     {
//         this.fname=fname;
//         this.lname=lname;
//     }
//     static empid=10;
//     pincode=111;

//     static display()
//     {
//        console.log(this.empid);
//         console.log("hello");
//     }
//     show()
//     {
//         console.log(this.pincode);
//         console.log("Details...");
//     }
// }
// var emp1=new employee("suma","sk");
// emp1.show();

// employee.display();

// var emp1={
//     fname:"suma",lname:"sk",age:28,display:function(){return "hi"},skills:["js","java"]
// }
// var emp2__proto__= emp1;    //using __proto__
// console.log(emp2__proto__);
// var emp3=Object.assign({},emp1)     //usinh object.assign
// console.log(emp3);
// var emp4={}
// var emp4=Object.entries(emp1)     //usinh object.entries
// console.log(emp4);

//using extends and super
// class person{
//     constructor(legs){
//         this.legs=legs;
//     }
//     walks(){
//         console.log("human walks with"+ " " +this.legs+ "legs");
//     } }
// class animals extends person{
//     super(legs){
//         this.legs=legs;
//     }
//     runs(){
//         console.log("animals run with"+" "+this.legs+ "legs");
//     }}
// var one=new animals(4);
// one.walks();
// one.runs();
// var sum=((a,b)=>{console.log(a+b)});
// sum(3,9)

// function* generate()
// {
//     console.log("This will execute till first yield");
//     yield 1;
//     console.log("After first yield");
//     yield 2;
// }
// generate();


// let s= Symbol();
// console.log(Symbol()===Symbol());       //false: everytime it generates new symbol wen u call Symbol()
// console.log(typeof(Symbol()));   //symbol is its return type


    // console.log(`hello....
    //             My name is
    //             suma`);   

    //  const name="suma";
    // const empid="tyss1818";
    // export {name,empid};

    // const cloths=['jacket','shirt']
    // cloths.length=0;
    // console.log(cloths[0]);  // undefined

    // for(var i=1;i<=100;i++)
    //     {
    //         if(i%3==0)
    //             {
    //                 console.log("fizz");
    //             }
    //         else if(i%5==0 || i%6==0)
    //         {
    //             console.log("Buzz");
    //         }
    //         else if(i%3==0 && i%5==0)
    //         {
    //            console.log("fizzbss");
    //         }
    //         else{
    //             console.log(i);
    //         }
    //       }

    // var a=null;
    // var b;

    // console.log(a);         //null
    // console.log(b);         // undefined
    // console.log(typeof(a)); //Object
    // console.log(typeof(b)); // undefined

    // const emp={
    //     fname:"suma",
    //     exp:5
    // }
    // emp.fname="rekha maam"
    // console.log(emp);

    // function run()
    // {
    //     console.log("this function will run after 3 seconds");
    // }
    // setTimeout(run,3000);
    // setTimeout(() => {
    //     console.log("execters after 3 seconds");
    // }, 3000);

    // function login(user,pass,type)
    // {
    //     result=type(user,pass);
    //     return result;
    // }
    // function admin(user,pass)
    // {
    //     console.log(user+ " "+ pass);
    // }
    // function officer(user,pass)
    // {
    //     console.log(user+ " "+ pass);
    // }
    // function assistant(user,pass)
    // {
    //     console.log(user+ " "+ pass);
    // }
    // login("admin@gnail.com","admin21234",admin)

// function dupl(arr)
// {
//     var unique= " ";
//     for(var char of arr)
//     {
//         if(unique.includes(char)== false)
//         {
//             unique += char+ " "; 
//         }
//     }
//     return unique;
// }
// var arr=[10,30,50,60,20,40,50,10]
// var result=dupl(arr);
// console.log(result);

function reversestring(str)
{
    reversed= " ";
    for(var i=0;i<str.length;i++)
    {
        reversed=str[i]+reversed;
    }
    console.log(reversed);
}
reversestring("suma");
