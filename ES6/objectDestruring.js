
//declaring an object
var friend  = {
    f_name :"Varsha",
    l_name : "Sungar",
    yoe : 4,
    skillset : ["java", "selenium", "javascript", "api"],           //===>array

    greet : function(){                                                //===>function
        return "Hello all, I am "+" "+this.f_name+" "+this.l_name
    },

    company : {                                             //===>object
    c_name : "TestYantra",
    dept : "RMG team",

    }
}

//case 1: regular method
// let FriendName = friend.f_name              //storing property value in another variable called FriendName
// let skills = friend.skillset                //storing property value in another variable called skills
// console.log(FriendName);                //varsha
// console.log(skills);

//case 2: 
// let {f_name} = friend
// let {company} = friend
// console.log(f_name);
// console.log(company);
//condition 1: curly braces
//condition 2: reference name should be same as that which is in the object

//case 3: change the reference variable => so that we can decalre our own reference variable
// f_name in object friend will be renamed as myName
let {f_name: MyFriendName} = friend
console.log(MyFriendName);          //varsha                
//console.log(f_name);                //ReferenceError / because interpreter will understand from where it has to fetch fname



