function LoginType(user,pass,logAs)
{
    console.log(logAs(user,pass))
}
    function hrassistant(user,pass)
    {
        return(user + " " + pass)
    }
    function hrhead(user,pass)
    {
       return(user+ " " + pass)
    }
    function hrofficer(user,pass)
    {
        return(user+ " " + pass);
    }
LoginType("hrassistant@gmail.com","hrassistant@123",hrassistant)