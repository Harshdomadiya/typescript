

const x:number = 1;
console.log(x);


function greet(firstName:string)
{
    console.log("hello"+firstName);
}

greet("harsh");
 
//                              this shows what's funaction return(not mandatory)
function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(2,4));
//                      () this shows input para
function runAfter15(fn :() => void){
    setTimeout(fn,1000);     // void shows return para   
}

runAfter15(() => console.log("hi there")); 

//inertface == object
interface user {
    fName : string,
    lName: string,
    age: number,
    email? : string // ?:- optional entity
}

function isLegal(us:user){
    if(us.age>18)return 1;
    else return 0;
}
isLegal({
    fName : "hsr",
    lName : "patel",
    age: 20
})

// types :-very similar to interfaces,types let you aggregate data together
type User ={
    fName : string,
    lName : string,
    age : number
}

//features of type:
//1.union
    type greetArg = number | string | boolean;
    function greet2(id:greetArg)
    {

    }
    greet2(1);
    greet2("1");

//2.intersection
    type Employee = {
        name: string,
        startDate: Date
    }

    type Manager = {
        name: string,
        department: string
    }

    type TeamLead = Employee & Manager

    const t:TeamLead = {
        name : "harsh",
        startDate: new Date(),
        department: "asdsfdvf"
    }

//arrays in ts
    type arr = number[]

//generics
//:-generics enable you to create components that work with any data type while still providing compile-time type safety

function identity<T>(arg: T){
    return arg;
}

let output = identity("myString");
let output2 =identity(123);

console.log(output.toUpperCase());
