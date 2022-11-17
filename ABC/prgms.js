// function revers(str)
// {
//     reversed=" ";
//     for(var i=0;i<str.length;i++)
//     {
//         reversed=str[i]+reversed;
//     }
//     console.log(reversed);
// }
// revers("suma")

// function duplicate(str)
// {
//     var unique= " ";
//     for(var char of str)
//     {
//         if(unique.includes(char)==false)
//         {
//             unique += char +" ";
//         }
//     }
//     return unique;
// }
// var string="sumangalakashigar";
// var result=duplicate(string);
// console.log(result);
//*********
// var s="sumangla";
// var data="";
// for(var i=0;i<s.length;i++)
// {
//     if(s.charAt(i)=='a'||s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u')
//     {
//         data=data+s.charAt(i);
//     }
// }
// num=data.length;
// console.log(data);
// console.log(num);
/////////////////////////////////////

// function revers(str)
// {
//     reversed=" ";
//     for(var i=0;i<str.length;i++)
//     {
//         reversed=str[i]+reversed;
//     }
//     console.log(reversed);
// }
// revers("suma");

/////
// var str="sumakashigar";
// word="";
// for(i=0;i<str.length;i++)
// {
//     if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u')
//     {
//         word=word+str.charAt(i);
//     }
// }
// console.log(word);
// num=word.length;
// console.log(num);

// var str2='welcome to india to india'
// var str=str2.split(" ")
// for (var i=0;i<str.length;i++)
// {
//     var count=0;
//     for (var j=0;j<str.length;j++)
//     {
//         if (str[i]==str[j] && i>j)
//         {
//             break;
//         }
//         if (str[i]==str[j]
//         )
//         {
//             count++;
//         }
//     }
//     if (count>1)
//     {
//         console.log(str[i]+" "+count);
//     }
// }

// var empids=[101,102,103,104,105,106];

// var[one,two,three,...rest]=empids;
// console.log(rest);

// console.log(rest.concat("suma"));

// var empiname,empid;
// var[empname,empid]=[122,221]

// var[empid,empname]=[122,221];
// console.log(empid);

// var ename=["kiran","suma","sume","teju"]
// let [e1,e2,...others]=ename;
// console.log(e1);
// console.log(others);

var emp =[
    {fname:"suma",lname:"sk",ep:5},
    {fname:"varsha",lname:"vs",ep:4},
    {fname:"kiran",lname:"kp",ep:5},
    {fname:"pavani",lname:"pr",ep:3}, 
]

var result=emp.reduce((ac,cr)
{
    if(ac[cr.exp])
    {
        ac[cr]= 
    }
    

},{})