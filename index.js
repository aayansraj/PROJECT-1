// console.log("hello world")

// let city = "Bangalore";
// city = "Delhi";
// console.log("city",city);

// const country = "india";
// country = "USA";
// console.log("country",country);

// let marks = 90;
// let student = "Aayans";
// let isPassed = true;
// let x;
// let y = null;
// console.log("marks,student,isPassed,x,y---->",marks,student,isPassed)

// let student ="Rahul";
// let x=5;
// let z=typeof x;
// typeof student;
// console.log("z--",z);

        //NUMBER

// let a= 10;
// let b = 3.5;

// let inf = Infinity;
// let notANumber = NaN;

// console.log("type of inf",typeof inf);
// console.log("type of nan",typeof NaN);

// console.log(typeof notANumber);

// let age = 20;
// Number(age); // 20
// parseInt("10.5"); // 10
// console.log("age-->", typeof Number (age));
// console.log(typeof parseInt(10.5));


          //Strings

// let firstName = "Aayans";  
// let course = 'JavaScript';

// firstName.length    
// firstName.toUpperCase()
// firstName.toLowerCase()
// firstName.includes("Aay")

// console.log(firstName.includes("java"));

// let first = "Aayans";
// let last = "Raj";

// let full = first + " " + last;
// console.log(full);


       // Template Literals

// let firstName = "Aayans";
// let age = 24;

// let msg = `My name is ${firstName} and my age ${age}`;

// console.log("message",msg);

// let a = 10, b = 20;
// let sum =`Sum is ${a + b}`;

// console.log("sum",sum);

         // NAN

// let a = 10;
// let b = "abc"

// let result = a * b; //NAN
// console.log(typeof result); //"Number"

// console.log("5"+5);
// console.log("5"*5);
// console.log(25*"abc");
// console.log(5+5);

    // HOSTING

// console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;

// var z;
// console.log(z);

   //  TEMPORAL DAED ZONE

// LOOSE (==) VS STRICT (===) EQUALITY

// 5 == "5"
// true == 


// forEach()

// let numbers = [10,20,30,40];

// numbers.forEach()

// numbers.forEach(function(i){
//     console.log(i)
// })

// numbers.forEach()

// numbers.forEach(function(i){
//     console.log(i)
// })


// Functions



       // Arrow Functions 

// let fib = (n)=>{
//     if(n==1){
//         return 1;
//     }
//     if(n<=0){
//         return 0;
//     }
    
//     return fib(n-1)+fib(n-2);
// }
// fib(10)
// console.log(fib(10));

     // IIFE---> Immediately invoked Function Expression

// (function(){
//     console.log("I am running automatically ");
    
// })();
    
// (function(name){
//     console.log("Hello" + name );
    
// })("Aayans");

// (function(){

// })();


      //OBJECT

// let user = {
//     name :"Aayans",
//     age: 19,
//     isAdmin: true
// };

      //  traversal of Object in js
// 1 Question
// let user = {
//     name :"Aayans",
//     age: 19,
//     isAdmin: true
// };

// for(let key in user){
//        console.log("key:",key,"value:",user[key]);

// };

// 2 Question
// let company = {
//        name:"Google",

//        location: {
//               city: "Banglore",
//               pincode: 560001
              
//        }
// };
// // console.log("location", company);

// for(let key in company){
//        if (typeof company[key] === 'object'){
//               for (let innerkey in company[key]){
//                      console.log(innerkey, company[key][innerkey]);
//               }
//        }
//        else {
//               console.log(key, company[key]);
//        }
// };       
// console.log("USER",user);


// let user2 = new Object();
// user2.name = "Aayans";
// user2.age = 19;

// console.log("USER", user2);

    //dot notation
// console.log("USER",user2.name);

   //  bracket notation
// console.log(user["name"]);

       // OBJECT WITH FUNCTION AND THIS KEYWORD

// let firstname = "Dumbledore"
// let person = {
//        firstname: "Aayans",
//        greet: function() {
//               return "Hello " + firstname;
//    }
// };

// console.log(person.greet());


    // NESTED OBJECT
// let company = {
//        name:"Google",

//        location: {
//               city: "Banglore",
//               pincode: 560001
              
//        }
// };

// console.log(company.location.pincode);



   // recursion 

// let company = {
//        name:"Google",

//        location: {
//               city: "Banglore",
//               pincode: 560001
              
//        }
// };

// function printObject(company) {
//        for (let key in company) {
//               if (typeof company[key] === 'object') {
//                      console.log("Object",key);
//                      printObject(company[key]);
//               }     
//               else {
//                      console.log(key, company[key]);
//               }
//        }
// };
// printObject(company);


      // ARRAYS
// let arr = ["A","B","c"];

// let a1 =[1,2,3];
// let b = a1;

// b.push(55);
// console.log(a1);


// copy method

// let arr = [2,6,7,8,9];
// let a = arr;
// a.push(4)
// console.log(a);

// let b = a1;
// b.push=(55);
// console.log(a1);

//  spread-operator/shallow copy
// let c =[...a1];
// c.push =(90);
// console.log(a1);

// // clone method /deep copy method
// let d = structuredClone(a1)
// d.push(99)
// console.log(d)

// callback

// function greet(name,callback){
//     console.log("Hello" + name);
//     callback();
// }

// let result = greet ("Aayans", () =>{
//     console.log("Bye !");    
// });

// greet("Aayans" , ()=>{
//     console.log("say");
    
// })
// function sayBye(){
//     console.log("Bye !");
// }
// greet("Aayans",sayBye);

     //  HOF -- High Order Function

// function calculate(a,b,operation){
//     return operation(a,b);
// }

// function add(x,y){
//     return x + y;
// }
// console.log(calculate(10,5,add));



        //   // forEach
// let student =["Aayans","Rahul","Neha"]

// student.forEach((name, index, array)=>{
//     console.log(index + "->" + name,array);
// });

// let b = student.forEach((i,j,k)=>{
//     console.log("array log",i,j,k);
    
// });
// console.log(b);


// //map() - Transformation
// //purpose 

let prices =[100,200,300];

let gstPrices = prices.map(p => p+p * 0.8);
console.log(gstPrices);

let r1 = prices.map(
    (x) => {
        return x * x;
    }
)
console.log("Map result",gstPrices);
