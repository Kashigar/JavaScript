async function logintype()
{
    
    p =new Promise((resolve,reject)=>
    {
        path=("hrhead@gmail.com")
        if(path=="headmin@gmail.com")
        {
            resolve("Admin");
        }
        else
        {
            reject("not a admin");
        }

    })
    await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
}
logintype()