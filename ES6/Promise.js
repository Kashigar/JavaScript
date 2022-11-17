// async function synch()
// {
//     console.log("login to the application");
//     var p=new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve("In progress")
//             reject("Rejected")
//         },3000)
//     })
//     await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
//     console.log("One promise executed");

//     var p=new Promise((resolve,reject)=>
//     {
//         resolve("Executed")
//         reject("Rejected")

//     },1000)
//     await p.then((msg)=>console.log(msg)).catch((msg)=>console.log((msg)))
//     console.log("Logout");
// }
// setTimeout
// synch()

async function logintype()
{
    var type="admin"
    p=new Promise((resolve,reject)=>{
       
        if(type)
        {
            resolve("Admin login")
        }
        else{
            reject("not a admin")
        }
    })

await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
}
logintype()