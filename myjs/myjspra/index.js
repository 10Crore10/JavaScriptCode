// let book = ["Math","physic","bio","computer"];

// // book[1] = "English";
// //operation 

// // console.log(book.length);

// //push method
// book.pop("bio");
// console.log(book);



// let book = ["Math", "physics", "bio", "computer science "];
//lenght of array 
// console.log(book.length);

//add something in array at last element we use push method 
// book.push("hindi");

//add first elemet in array 
// book.unshift("hindi");
// console.log(book);

//remove element from lasrt in array we use pop method
// book.pop();
// console.log(book);

//remove element from start 
// book.shift();

// jab arrey mai element bich mai se hata na ho  tab splice(); use krte hai
// book.splice(1,2);

//to know the position we use indexOf

// to know it is giveen is array or just a variable 
// let b1 = ["Math", "physics", "bio", "computer science "];
// let b2 = "Math";
// console.log(Array.isArray(b2));

//convert sentence in array for 
// let text = "This is a random text";
// let wordarray = text.split(' '); 
// console.log(wordarray);



//array ko  koi join krna ho aur sentence jes bna na ho to join method use kr te hai 
// let text = ["Math", "physics", "bio", "computer science "];

// let wordjoinarray = text.join(' ');
// console.log(wordjoinarray);

//for joing two array we use concat method 
// let b1 = ["Math", "physics", "bio", "computer science "];
// let b2 = ["english", "sanskrit"];
// let con = b1.concat(b2);
// console.log(con);

/*  Now we satrt new topic multi dimension array */
//array ke ander aary suppose we can under stand by this example such as 

// let bookwitharray = [
//     ["math","300"],
//     ["physics","500"],
//     ["bio","400"]
// ];
// console.log(bookwitharray[1][0]);

// let book = ['Math', 'physics', 'bio', 'computer science '];
// for( i = 0; i<book.length;i++){
//     console.log(`Element ${i}  is ${book[i]}\n`);
// }

// for each array 
// // book.forEach(myfu);
//  function myfu(value){
// console.log(value);}

/*-----------------New Topic Function ----------------*/
// predifine function and user define function

// for(i =0; i<=10;i++){
//     // document.write("2 x "+i+" = "+ 2*i+"\n");
//     document.write(`2 x ${1} = ${2*i} `);
//     document.write("<br>");
// }

/* lets define a function --- MulTable();
 let critate function */
//  function MulTable()
//  {
//     for(let i =0 ; i<=10;i++){
//         document.write(`2 x ${1} = ${2*i} `);
//          document.write("<br>");
//      }
//      document.write("<br> <br>");
//  }
//  MulTable();

//  document.write("lets again call MulTable() function ");

//  MulTable();

/*-----------------New Topic Parameters and Arguments in function   ----------------*/
// i creat a function and pass an parameter num and call function and pass argumnet u can see below
// function MulTable(num){
//     document.write(`Table of ${num}`);
//     document.write("<br>");
//     for(i = 0 ; i<=10; i++){
//         document.write(`${num} x ${i} = ${num*i}`);
//         document.write("<br>");
//     }
//     document.write("<br>");


// }

// MulTable(2);
// MulTable(5);

/*----------- passing two parameters in a function ----------- */
// function add(num1, num2){
// DocumentTimeline.write(num1+num2);
// }
// add(5,7);

/*----------- The Arguments Object -------------*/

// function add(){
//     if(arguments.length == 0){
//         document.write("No parameter passed !");
//     }
//     else{
//         let sum = 0;
//         for(let i = 0; i<arguments.length ;i++)
//         {
//             sum = sum + arguments[i];
//         }
//         console.log(sum);
//     }
// }
// add(1,2,3,4,5,6,7,8);

// we can also store a function in a variable such as 
// let addition = add;// we store add function in addition, it work smilar as add function work in above 
// addition(5,2);//

/* -------------------------- Return in Function  ----------------------------*/
// function add(a,b){
//     let c = a+b;
//     return c;
// }
// let d = add(6,4)
// document.write(d)
// function mai jb bhi pehla return mile ga us ke aage kuchh bhi return nhi ho gaa


/* -----------------  Global and Local Variable ----------------*/

/* -----------------------  Anonymous Function     -------------------------  */
//ayse sa function jis ka naam na ho usee anonymous function bol te hai, aur anonymous function ko ek varible mai hold kra de te hai jis ko function expression ke naam se bhi jan te hai 
//function expression is given below
// let show = function (){
//     console.log("anonymous function ");
// };
// show();

// function show(){
//     // document.write("${hellow !!!!!!}");
//     console.log("hi kaju");
// }
// setTimeout(show, 3000);


// setTimeout(function show(){
//     // document.write("${hellow !!!!!!}");
//     console.log("hi kaju");
// }, 3000);

/*---------- Immediately invoked function -------*/
//jab humai code kuchh der ke liye define krna ho , immediate invoked function se memory space back jata hai


// ( function (){
//     console.log("Hellow world !");
//     alert("Hellow world!");
// }) ();

/*----------- Object in JavaScript  -----------------------------------*/
/*------ Properties in Object -------*/
//object 
// let persone = {
//     firstName : 'kaju',//prompt("enter your name"),
//     lastName  : 'sharma'//prompt("enter your last name")
// };
// persone.age = 25; // in case we want to add more value in object we can do it in such way as i write here
// // console.log(persone.firstName);
// // console.log(persone.lastName);
// //let print the value of object usimg for loop to print all object value in on line of code 
// for(let key in persone){
//     console.log(key + " :"+persone[key]);
// }

/*---------   Methods in Object  ------------*/

//kisi object ke function ko method bole ge , ye method kucch kam kre ge jise function bola jata hai , hum 4 tarke se method bana sake hai 
// 1)
// let person = {
//     firstName: 'kaju',
//     lastName : 'ameer'
// };
// person.age = 22;

// person.sayHellow = function (){
// console.log("hellow my method!");
// }
// console.log(person.sayHellow());

//2) 
//  function greet (){
//     console.log("hi everyone ! ");
//  }

//  person.sayHellow = greet;
//  person.sayHellow();

//3 jab aap object define kr rhe ho usi samaye pr aap ek annonymous function assign kr do ek method ka naam likh ke  
//  let person = {
//     firstName : "kajal",
//     lastName  : "bhardwaj",
//     sayHellow : function (){
//         console.log("it is a 3rd way to creat method of an object");
//     }
//  }
//  person.age = 22;

//  person.sayHellow();

//4
// let person = {
//     firstName : "kaju",
//     lastName  : "bhardwaj",
//     sayHellow (){
//         console.log("4th way to creat method  ");
//     }
// };
// person.sayHellow();

/*--------------------   "this" in Object   -------------------------*/
// let person =  {
//   firstName : "kajal",
//   lastNAME  : "Bhardwaj",
//   sayHellow  () {
//     console.log(" hellow i am kajal and i have "+car.brand+".... ");
//     // we can get property of one object to another object such ass . i call here brand property of "car" object into person object

// }
// };

// let car = {
//     brand :'tata',
//     model :'Safari'
// };
// person.sayHellow();

//this keyword hold the value of current object

/*------------------    Math Object     --------------------------*/
// let x = Math.ceil(4.9);//0.5 ke age ka nuber print ho ga
// let x = Math.round(4.9);// rounfer fig in math
// let x = Math.floor(4.9); // 0.5 kse niche ka numberprint krega
//let x = Math.trunc(4.9);// ye decimal ke baad ka number hata dedta hai
//let x = Math.pow(2,3);//kisi bhi number ka square , ya cute nikle ne ke kam ataa hai bole to number ka power nikle ne ke kam ata hai 
// let = Math.sqrt(1000)//squore root nikl ne ke kaam ata hai 
//let x = Math.min(4,23,100,88,102);//output 4
// let x = Math.max(4,23,88,100,105);//output 105
// console.log(x)

/*-------------------------- Random Number   -------------------------------*/

//let x = Math.random(); // 0.5678-9
//let x = Math.floor(Math.random()*10); // 0-9
// let x = Math.floor(Math.random()*1018); 
// Math.floor(Math.random()*(25-15))+15;


// function getRandom(min, max){
//     let x = Math.floor(Math.random()* (max - min)) + min;
//     return x;
// }
// console.log(getRandom(60, 100));

/*-------------------- Data Object -------------------------*/
//let x  = new Date();
// we can pass maximum 7 parameters in data() such as year, month, date , hours , minutes, secons ,mili seconds
//console.log(x);

// let x = new DataTransfer("October 13, 2018 11:12:33");
// console.log(x.getTime()); //get use for geting data from data function
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getHours());
// console.log(x.getMinutes());
// console.log(x.getSeconds());
// x.setMonth(2020);// set change the value of data 
// x.setDate(2020);
// x.setHours(12);
// x.setMinutes(2);
// x.setSeconds(2020);
// console.log(x);

// lets add some more day in given date such as today is 15 Auguest so what will be day or month after 50 days

// let x = new Date ("July 27, 2024  12 :12:12");
// let y = new Date ("july 27, 2024 12 :11:13 ");
// y.setDate(x.getDate()+66);
//  console.log(x);
//  console.log(y);

/*---------------------------- new Keywords  -------------------------------------*/
// var person = new Object();

// person.name = "kajal ";
// person.age = 23;
// console.log(person.name);
// console.log(person.age);


/*-------- Property getters and setters--------------*/
// step.1)
//var person = {
//     name : "kaju ",
//     age : 23,
// };
// console.log(person.name.toUpperCase()); // hamai ek ek kr ke property ki value uppercase krane ke liye thik hai per humai kuchh aye sa bana hai jab object se bahra aye propety ki value wo apne aap UpperCase ho ke aye

//step.2) 
// var person = {
//     name: "kaju",
//     age: 23,//lets creat a method here

    // getname : function (){
    //     return this.name.toUpperCase();

    // }
    
    // get getname() {
    //     return this.name.toUpperCase();

    // }

//     st setname(n){
//         this.name = n.toUpperCase();
//     }
    
// // };
// //console.log(person.getname());
// //method likhne ka tarika method ka name likho aur bracket open aur close kro
//  //aur property ke call krne ka tarika hai sirf aur sirf name likhoge
    
// // console.log(person.getname);
// //step.3
//     // to maan lo hamai ek aye sa function bana hai wo method ki traf call na ho ke ek property ki traha call ho , to usi mai kam ata hai getter aur setter function


// person.stname = "kajaljii";
// console.log(person);

/*-------------- Object constructor function ------------------*/

// function Student(first, last, age, cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }
// var student1 = new Student("kaju", "bhardwaj",23, 1);
// // add some elemnt out of constructo  so we can do it in this way 
// student1.natonality = "india";
// //lets add method in student1 object 
// student1.name = function(){
//     return this.firstName + " " + this.lastName;
// }
// console.log(student1.name());

/*----------------------OBJECT PROTOTYPES  ------------------------------*/
//method aur object property ko constructor ke bahar add krne ke liye object prototype use kr te hai
// function Student(first, last,age,cls){ //constructor first name's first letter should be capital
//   this.firstName = first;
//   this.lastName = last;
//   this.age  = age;
//   this.class = cls;
// }
// Student.prototype.nationality = "indian";
// var student1 = new Student("kaju","bhardwaj",23,1)
// var student2 = new Student("kajal","waj",22,11)
// // console.log(student1.nationality); individal aye se acces kr sakte hai 
// console.log(student1); //aur pura data aye se acces kr sakte hai 
// console.log(student2);

/*--------------------- Nested Object  --------------------------*/
//js mai curlybraces hi object banate hai { } 
// var user = {
//     id : 101,
//     email : "kajal@gmail.com",
//     personalInfo : {
//         name : "abc",
//         address :{
//             street : "lane1",
//             city: "Delhi",
//             country : "India",
//         }
//     }
// };
// console.log(user.personalInfo.address.country);

//--->/neste object JSON wale topic mai kaam aye ga jab hum log API banye ge tab

/*-------------------- Hoisting -------------------------------*/
// sabi declartion ko sab se upper part mai rakh ne ko hoisting kehte hai, ye kam apne app interpreter krta hai file mai kahi bhi declaration use apne app user rakh le ga jis se code run kr te time error nhi ata hai 
// // example --->
// hellow();

// function hellow(){
//     console.log("hellow this funct declare after hellow call , so hoisting automaticaaly pull my code in above of hellow(); call");
// }


// "use strict" keyword se bina declaration aap variable ko use nhi kr sakte hai 

/*------------------------ Document Object Model (DOM)  -------------------------------*/
// The Document Object Model(DOM) is an application programming interfcace(API) for manipulating  HTM and XMl documents. (add,remove, and modify parts of the document/HTML)
// when a web page is loaded, the browser creates a document Object Model of the page.

// creat dynamic HTML --->
// js can changen all the HTML elements in the page
//js can change all the HTML attributes in the page
//js can cahge the all the css style in the page
//js can remove existing HTML element and attributes
//js can add new HTML elements and attributeds 
//js can react to all existing HTML events in the page 
//js can create new HTML events in the page
//NOTE:: iN THE DOM , all HTML elements are defined as objects.  so it will have property and method
//Th document object represents your web page.
//If you wsant to access any elements in an HTML page , you always start with accessing the document object.



/*---------------------------  select an element by "ID"  ----------------------------------*/